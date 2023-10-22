let domain = window.location.host;

// Facebook
if (domain.includes('facebook')) {
    let id = setInterval(() => {
        const feed = document.querySelector('[role="feed"]');
        if (feed) {
            feed.remove();
            clearInterval(id);
            console.log('removed feed');
        }
    }, 500);
}


// YouTube
if (domain.includes('youtube')) {
    let id1 = setInterval(() => {
        const feed = document.getElementById('contents');
        if (feed) {
            feed.remove();
            clearInterval(id1);
            console.log('removed feed');
        }
    }, 500);
}