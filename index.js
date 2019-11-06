const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const SELECT_ALL_XBEE1 = 'SELECT * FROM xbee WHERE xbeemac="0013A200405C267B" ORDER BY idxbee DESC';
const SELECT_ALL_XBEE2 = 'SELECT * FROM xbee WHERE xbeemac="0013A2004033E989" ORDER BY idxbee DESC';
const SELECT_ALL_XBEE3 = 'SELECT * FROM xbee WHERE xbeemac="0013A200405C2686" ORDER BY idxbee DESC';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lol69ds',
    database: 'wsn'
});

connection.connect(err => {
    if(err){
        return err
    }
});


app.use(cors());

app.get('/', (req,res)=> {
    res.send('go to /xbee to see info')
})

app.get('/xbee1', (req,res)=> {
    connection.query(SELECT_ALL_XBEE1, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data1: results
            })
        }
    });
});

app.get('/xbee2', (req,res)=> {
    connection.query(SELECT_ALL_XBEE2, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data2: results
            })
        }
    });
});

app.get('/xbee3', (req,res)=> {
    connection.query(SELECT_ALL_XBEE3, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data3: results
            })
        }
    });
});


app.listen(4000, () => {
    console.log('Listening on Port 4000')
});