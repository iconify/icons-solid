import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/v/vvgogybvx.css';
import '../../css/d/dlg73rn0l.css';
import '../../css/w/wtujdcc-c.css';
import '../../css/s/sskw_2j7j.css';
import '../../css/i/i48rz_k_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGL5qDQbzd" x1="9.01" x2="15.01" y1="3.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGL5qDQbzd)" class="vvgogybvx"/><path class="dlg73rn0l wm-a"/><path class="wm-shine wtujdcc-c"/><path class="sskw_2j7j wm-shine"/><path class="i48rz_k_a wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:soup"} {...others} />);
}

export default Component;
