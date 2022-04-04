import { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
function GifListContainer() {
  const [gif, setGif] = useState(``);
  const [searchInput, setSearchInput] = useState(``);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=dc6zaTOxFJmzC&rating=g`,
    )
      .then((data) => data.json())
      .then((data) => {
        return setGif([data.data[0], data.data[1], data.data[2]]);
      });
  }, [searchInput]);
  return (
    <div>
      <GifSearch onSearchInput={(e) => setSearchInput(e)} />
      <GifList gifs={gif} />
    </div>
  );
}

export default GifListContainer;