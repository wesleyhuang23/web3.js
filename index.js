require('dotenv').config()

// express js
const express = require('express')
const app = express()
const port = 3000

//web3js
const Web3 = require('web3');
const url = process.env.INFURA_URL
const web3 = new Web3(url);
const address = process.env.ETH_ADDRESS

app.get('/', (req, res) => {
  web3.eth.getBalance(address, (err, bal) => {
    res.send('This Wallet has ' + web3.utils.fromWei(bal, 'ether') + ' ETH');
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})