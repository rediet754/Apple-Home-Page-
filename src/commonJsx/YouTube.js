import React, { useState, useEffect } from "react";
function YouTube() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBFbQ2tbQyNKmESX6dIyEFmhZv_6qL9_Ws&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideosdata = data.items;
        return setVideos(youTubeVideosdata);
      });
  }, []);
  console.log(videos);
  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              <h1>Latest Videos</h1>
            </div>
          </div>
          {videos?.map((values, index) => (
            <div key={index} className="col-sm-12 col-md-4">
              <div className="videoThumbnail">
                <a
                  href={`https://www.youtube.com/watch?v=${values.id.videoId}`}
                >
                  <img src={values.snippet.thumbnails.high.url} alt="images" />
                </a>
              </div>
              <div className="videoInfoWrapper">
                <div className="videoTitle">
                  <a
                    href={`https://www.youtube.com/watch?v=${values.id.videoId}`}
                  >
                    {values.snippet.title}
                  </a>
                </div>
                <div className="videoDesc">{values.snippet.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default YouTube;
