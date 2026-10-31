import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/d/dxxap9b9f.css';
import '../../css/h/htra427zq.css';
import '../../css/t/tttjevsuk.css';
import '../../css/b/bm15owgdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7vqYnd5P" x1="9.87" x2="13.87" y1="4.5" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="dxxap9b9f wm-k"/><path class="htra427zq wm-deco"/><path fill="url(#SVG7vqYnd5P)" class="tttjevsuk wm-k"/><path class="bm15owgdy wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:case-upper"} {...others} />);
}

export default Component;
