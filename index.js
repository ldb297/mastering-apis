
//imports
const fetch = require('node-fetch')

//request to a website that returns html
fetch ('https://espn.com') // url, endpoint
.then((response) =>{
    return response.text() //to view text/html
})
.then((html) =>{
    console.log(html) //prints to terminal
})

//request to a 3rd party DB that returns json object
fetch('https://api.github.com/users/facebook') //api endpoint
.then(response =>{
    return response.json() //to view as json object
})
.then(data =>{
    console.log(data)
})

//asynchronous so make sure to do all functions 
//in callback of .then because running this line 
//with the facebook line will return the fastest object response first.
fetch('https://api.spacexdata.com/v3/capsules')
.then(res=>{
    return res.json()
})
.then(dataArray=>{
    console.log(dataArray)
    let c102Object = dataArray[1]
    let capsuleSerial = c102Object['capsule_serial']
    let capsuleState = c102Object.status
    console.log(c102Object)
    console.log(capsuleSerial)
    console.log(capsuleState)
})