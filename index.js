//https://data.lacity.org/resource/ghu5-z54x.json
function getLADataFromAPI(){
    var endpoint = 'https://data.lacity.org/resource/ghu5-z54x.json'
    var inputEl = document.getElementById('search')
    var searchTerm = inputEl.value
    
    fetch(endpoint) // returns a promise
    .then(function(data){
        return data.json()
    })

    .then(function(json){
        // console.log(json)
        var resultDiv = document.getElementById('result')
        var finalHTML = ''
        var newData = json.filter(function(item){
          return item.location_zip === searchTerm
        })
        newData.forEach(function(item){
            var cardItem =
            `
            <div class="col s6 m4">
              <div class="card">
                <div class="card-image">
                 <img src="http://th17.st.depositphotos.com/1010555/3996/i/450/depositphotos_39968457-stock-photo-where-to-immigrate.jpg">
                  <span class="card-title">${item.location_zip}</span>
                </div>
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>        
            `            
            
            finalHTML += cardItem
            
        })

        resultDiv.innerHTML = finalHTML
        console.log(newData)
    })
    
    
    .catch(function(error){
        console.log(error)
    })
}
