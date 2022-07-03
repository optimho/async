
/* The async keyword and the same thing using the promise.

 */

async function add(a,b){
    //console.log(typeof a === typeof b)
    if (( a > 10) || (b < 5)){
        throw ('number is not with in range')
    }
    return a+b
}


function subtract(a,b){
    return new Promise((resolve, reject)=> {
        if ((typeof a !== 'number') || (typeof b !== 'number')) {
            reject('the input looks like it is not a number');
        }
        return resolve (a - b)

    } )}


add(1,6)
    .then((val)=>{
    console.log(`the answer is ${val}`)
})
    .catch((val)=>{
        console.log("well there is a problem ", val)
    })

subtract(1,6)
    .then((val)=>{
        console.log(` the answer is ${val}`)
    })
    .catch((val)=>{
        console.log("well there is a problem ", val)
    })

/*
Here is an example of the await command
 */

// function getPlanets(){
//     return axios.get('https://swapi.dev/api/planets/')
//
// }
//
// getPlanets().then((response)=>{
//     console.log(response.data)
// })

async function getPlanets() {
    const results = await axios.get('https://swapi.dev/api/planets/')
    console.log(results.data)
}

getPlanets()

/*
To catch error s there are options
getPlanets().catch((err)=>{

}

or
 */

async function getPlanets2() {
    try {
        const results = await axios.get('https://swapi.dev/api/planets/')
        console.log(results.data);
    }catch (e) {
        console.log('IN catch caught an error')
    }

}

getPlanets2()

