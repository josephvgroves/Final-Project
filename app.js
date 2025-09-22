var express = require('express');
//var dataProcessing = require('./dataProcessing.js');
var indexRouter = require("./routes/index.js");
var app = express();
app.set('views','views');
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(express.static());

app.use(express.static(__dirname + '/public'));

// for the home directory
app.use('/', indexRouter);

//import { restClient } from '@polygon.io/client-js';
//const rest = restClient(process.env.POLY_API_KEY);

app.listen(3000, ()=>{
    console.log("Express is running on port 3000");

});