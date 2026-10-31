import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/ktix5xn7e.css';
import '../../css/r/rpy3mbs-w.css';
import '../../css/x/xqo1getir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGiMIkUbST" x1="10" x2="14" y1="5" y2="18.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ktix5xn7e wm-k"/><path class="rpy3mbs-w wm-deco"/><path fill="url(#SVGiMIkUbST)" class="wm-k xqo1getir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:list-filter"} {...others} />);
}

export default Component;
