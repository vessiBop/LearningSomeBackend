const express = require('express');
const { routeHandler } = require('./simple-controller')
const app = express();
const pinoHttp = require('pino-http');
const pino = pinoHttp;



/* Response API call without controller   

app.get('/', (req, res) => {
  res.send('Hello World from express');
});   */ 


// Response call with controller 

app.get('/', routeHandler);
app.listen(4000);
console.log('server running @ 4000');