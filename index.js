var express = require('express')

var app = express()

app.use('/static', express.static('assets'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.listen(3000);
console.log('server lisen in port 3000')