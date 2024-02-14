// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let catsArr = [...cats, name]
    return catsArr
}

function prependCat(name){
    let catsArr = [name, ...cats]
    return catsArr
}

function removeLastCat(){
    let catsArr = cats.slice(0, cats.length - 1)
    return catsArr
}

function removeFirstCat(){
    let catsArr = cats.slice(1, cats.length)
    return catsArr 
}
