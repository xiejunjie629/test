const mongoose = require('mongoose');
const Schema = mongoose.Schema();   //定义一个模式

const book = new Schema({
    a_String: String,
    a_Date : Date
})

//创建模型
const shu = mongoose.model('shu',book);