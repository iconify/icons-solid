import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knpoae5ge.css';
import '../../css/i/ipyektf-k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="knpoae5ge"/><path class="ipyektf-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yt-dlp-web-player"} {...others} />);
}

export default Component;
