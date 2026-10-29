import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ah2nw_bsy.css';
import '../../css/l/lpkhpnbrd.css';
import '../../css/g/g_3ckc6_n.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/x/x2uudub6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ah2nw_bsy wm-k"/><path class="lpkhpnbrd wm-a"/><path class="g_3ckc6_n wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="wm-a x2uudub6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:basketball-engrave"} {...others} />);
}

export default Component;
