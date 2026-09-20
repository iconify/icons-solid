import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p2gjfnnwe.css';
import '../../css/d/dudc5xbbm.css';
import '../../css/s/sx1tplbmq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="p2gjfnnwe"/><rect class="dudc5xbbm"/><path class="sx1tplbmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-play-list-2-player-television-movies-slider-media-tv-players-video"} {...others} />);
}

export default Component;
