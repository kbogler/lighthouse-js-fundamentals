// $(function(){



// });

loopyLightHouse([1,100] , [2,5] , ["Batty","Beacon"])
function loopyLightHouse(range , multiple, words){

    for (var i = range[0]; i<= range[1]; i++){
        if(i % multiple[0] === 0){
            console.log(words[0])
        }

         if(i % multiple[1] === 0){
            console.log(words[1])
        }

        if(i % multiple[0] === 0 && i % multiple[1] === 0){
            console.log(words[0] + words[1])
        }
    }
}