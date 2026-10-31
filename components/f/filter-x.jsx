import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/tjnwltbwu.css';
import '../../css/u/u1_ebac0t.css';
import '../../css/p/pbn71_bjt.css';
import '../../css/h/hpgq0ccyl.css';
import '../../css/w/wpn-x7b3c.css';
import '../../css/i/izts-9bzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQgIqtOVH" x1="9.57" x2="13.57" y1="2.5" y2="21.69" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="tjnwltbwu wm-k"/><path class="u1_ebac0t wm-s"/><path class="pbn71_bjt wm-deco"/><path fill="url(#SVGQgIqtOVH)" class="hpgq0ccyl wm-k"/><path class="wm-s wpn-x7b3c"/><path class="izts-9bzc wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:filter-x"} {...others} />);
}

export default Component;
