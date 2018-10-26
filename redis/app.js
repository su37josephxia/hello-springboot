var Redis = require('ioredis');
var port = 6378 
var redis = new Redis(port, '127.0.0.1');  
console.log('connect Redis:'+port)
redis.set('hello', 'node-redis');
redis.get('hello', function (err, result) {  
  console.log(result);  
});  