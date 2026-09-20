import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mr99q4ujx.css';
import '../../css/c/cnbk0qb_n.css';
import '../../css/u/u18laeb4z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="mr99q4ujx"/><circle class="cnbk0qb_n"/><path class="u18laeb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-recording-tape-1-film-television-tv-movies-reel-video"} {...others} />);
}

export default Component;
