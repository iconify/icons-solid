import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n7_wef7ly.css';
import '../../css/w/w0oo0acgp.css';
import '../../css/i/i-sn-dk3b.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/p/pz2j55bku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n7_wef7ly wm-k"/><path class="w0oo0acgp wm-a"/><path class="i-sn-dk3b wm-shadow"/><path class="f2iz_pbwp wm-k"/><path class="d3y9mw6db wm-k"/><path class="pz2j55bku wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-engrave"} {...others} />);
}

export default Component;
