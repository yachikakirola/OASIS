var l=1;
function expandGrid(){
    var container = document.getElementById("griid");
    if(l==1)
    {
        container.innerHTML+= '<div class="box"><a href="https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=600"><img class="crs" src="data/bag.jpg" alt="bag"><div class="tover"><br>BAG</div></a></div><div class="box"><a href="https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg?auto=compress&cs=tinysrgb&w=600"><img class="crs" src="data/heels.jpg" alt="heels"><div class="tover"><br>HEELS</div></a></div><div class="box"><a href="https://images.pexels.com/photos/860009/pexels-photo-860009.jpeg?auto=compress&cs=tinysrgb&w=600"><img class="crs" src="data/jewel.jpg" alt="jewel"><div class="tover"><br>JEWEL</div></a></div>';
        l+=1;
    }
    else
    {
        alert('More COntent will be added Soon. Stay Tuned:)');
    }
}
function sub(){
    alert('Form Sent')
}