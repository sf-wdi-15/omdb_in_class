// We need to require any libraries we want to use.
var express = require("express");
var request = require("request");

// Express requires that we instantiate an app.
var app = express();

// Create a handler to respond to GET requests
// to our home page ("/").
app.get('/', function(req, res){
  res.render('index.ejs');
});

// Create a handler to respond to GET requests
// to our search page ("/search").


