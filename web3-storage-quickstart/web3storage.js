 // store.mjs
 
 import { Web3Storage, getFilesFromPath } from 'web3.storage'
 
 const token = process.env.API_TOKEN
 const client = new Web3Storage({ token })
 
 async function storeFiles () {
   const files = await getFilesFromPath('/path/to/file')
   const cid = await client.put(files)
   console.log(cid)
 }
 
 storeFiles()






 
// Run it with
// npm i web3.storage
// API_TOKEN=YOUR_TOKEN node ./store.mjs