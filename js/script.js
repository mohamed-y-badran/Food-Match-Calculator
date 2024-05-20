function calmat(){
    var food1 = document.getElementById('Food1').value.trim()
    var food2 = document.getElementById('Food2').value.trim()

    if(food1==='' || food2===''){
        alert("Enter Both Food Names")
    }else{
        var matchper = Math.floor(Math.random() * 100)

        var result =document.getElementById("result")

        result.innerHTML = food1 + " and " + food2 + "'s Match Percentage is " + matchper

        if(matchper > 80){
            result.innerHTML += " Great Match , GO Cock Quicly! Yummy!!!"
        } else if ( matchper > 60){
            result.innerHTML += " Good Match , May Need More Ingredients!!!"
        }else if ( matchper > 40){
            result.innerHTML += " Fair Match , Try add Sesoning!!!"
        }else{
            result.innerHTML += " No  Match , Don't Try Cocking!!!"
        }

    }
      
}





