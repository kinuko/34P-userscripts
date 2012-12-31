 // ==UserScript==
    // @name           34P GIF Animator
    // @description    Animates .gif thumbnails on 34Pchan.org.
    // @version        1.0
    // @include        http://www.34pchan.org/*/*
    // @include        http://www.34pchan.org/*/res/*
    // @include        http://34pchan.org/*/res/*
    // @include        http://34pchan.org/*/*
    // ==/UserScript==
          
    function animaGifs() {
    var thumbs = document.getElementsByTagName("img");
    var num = thumbs.length;
     
    for(i = 0; i < num; i++){
            if(thumbs[i].className == "thumb"){
                    if(thumbs[i].src.match(".gif")){
                            thumbs[i].src = thumbs[i].src.replace("s", "");
                            thumbs[i].src = thumbs[i].src.replace("thumb", "src");
                    }
            }
    }
    }
    animaGifs();


