import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/g/gwyjwdbzl.css';
import '../../css/i/i4fotxbkd.css';
import '../../css/w/wfj-emcag.css';
import '../../css/h/hpd6vubxl.css';
import '../../css/s/sm5-kzboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG9MOVhbRg" cx="9.4" cy="6.18" r="21.52" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="gwyjwdbzl wm-shadow"/><path fill="url(#SVG9MOVhbRg)" class="i4fotxbkd wm-k"/><path class="wfj-emcag wm-shine"/><path class="hpd6vubxl wm-deco"/><path class="sm5-kzboc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:dna"} {...others} />);
}

export default Component;
