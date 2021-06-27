




function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    return starterPrice + maindishPrice + dessertPrice + beveragePrice;

}
var sum = calculateInvoice(4 , 17 , 4 , 3 )
console.log(sum)


//first invoice

function Invoiceone(starterPrice, maindishPrice, dessertPrice, beveragePrice){
    return starterPrice + maindishPrice + dessertPrice + beveragePrice;

}

var first = Invoiceone(4, 15, 5, 8)
console.log(first)

//second invoice
function Invoicetwo(starterPrice, maindishPrice, dessertPrice, beveragePrice){
    return starterPrice + maindishPrice + dessertPrice + beveragePrice;

}

var second = Invoiceone(6, 17, 3, 3)
console.log(second)

//third invoice
function Invoicethree(starterPrice, maindishPrice, dessertPrice, beveragePrice){
    return starterPrice + maindishPrice +dessertPrice + beveragePrice;

}

var third = Invoicethree(4, 11, 5, 4)
console.log(third)


/*invoice with 10%
function studentInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice){
    var sum = starterPrice + maindishPrice + dessertPrice;
    var sumevry = sum / 10;
    var beverage= beveragePrice
    
    
    

}
studentInvoice(5, 11, 5, 8)
console.log(sum*0.9 + beverage)*/
