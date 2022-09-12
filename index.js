const express = require('express');
const app = express();
const login = require('./router/login')
const post = require('./router/post');
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/assignment')
app.use('/post',post)
app.use('/',login)

app.listen(3000 ,()=> console.log('server is running at 3000'))