import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/u46ivbblu.css';
import '../../css/g/g89pbccxy.css';
import '../../css/n/ne_5v2vgt.css';
import '../../css/l/lyro0xb7c.css';
import '../../css/i/icnbnbcgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGiMIkUbST" x1="10" x2="14" y1="5" y2="18.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="u46ivbblu wm-k"/><path class="g89pbccxy wm-s"/><path class="ne_5v2vgt wm-deco"/><path fill="url(#SVGiMIkUbST)" class="lyro0xb7c wm-k"/><path class="icnbnbcgc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:list-minus"} {...others} />);
}

export default Component;
