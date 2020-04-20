console.log("Assalamualicum");

// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '9db057fc43fd4835b2bd60465cfd8ecf';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// What to do when response is ready
xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = '';
        articles.forEach(function(element, index){
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collaps${index}">
                                        <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body">${element["content"]}.<a href="${element['url']}" target="_blank">Read more here</a>
                                </div>
                            </div>
                        </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log('Some error occured');
    }
}

xhr.send();