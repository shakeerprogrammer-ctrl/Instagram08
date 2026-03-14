const fetch = require("node-fetch");

exports.handler = async function(event){

try{

const body = JSON.parse(event.body);
const url = body.url;

const api = "https://igram.world/api/convert?url=" + encodeURIComponent(url);

const response = await fetch(api);
const data = await response.json();

return {
statusCode:200,
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
video:data.url
})
};

}catch(err){

return {
statusCode:500,
body:JSON.stringify({
error:"Download failed"
})
};

}

};
