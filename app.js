const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');




//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');

const api = process.env.API_URL;

app.get(`${api}/products`, (req,res)=>{
    const product = {
        id:1,
        name:"hair dresser" ,
        image:' some_url',
    }
    res.send(product);
})

app.post(`${api}/products`, (req,res)=>{
   const newProduct = req.body;
   console.log(newProduct)
    res.send(newProduct);
})

mongoose.connect("mongodb://127.0.0.1:27017");

app.listen(3000,()=>{
    console.log(api);
    console.log("It is working");
})