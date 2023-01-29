const express = require('express')
// const item = require('./data')
const axios = require("axios")
const app = express()
const port = 3000

app.get('/api', async(req, res) => {
    try{
        const response = await axios.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json")
        res.json(response.data);
    }
    catch(error) {
        res.status(500).send({error: error});
    }

    // res.json(item)
})

app.listen(port, function() {
    console.log('Success');
})