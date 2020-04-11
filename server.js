const express = require('express');
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = express.Router(); 

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(router);

router.get('/message' , (req, res) =>{
    console.log(req.headers);
    res.header({
        "custom-header" : "nuestro valor"
    })
    // res.send('Lista de mensajes')
    response.success(req, res, "lista de mensajes");
    })

    app.post('/message', (req, res) => {
        console.log(req.query);
        if (req.query.error == 'ok')
            response.error(req, res, 'Error simulado',401);
        else
            response.success(req, res, 'Creado correctamente', 201);
    });

app.use('/app', express.static('public'));

app.listen(3000);
console.log('la aplicacioón esta escuchando en http://localhost:3000')