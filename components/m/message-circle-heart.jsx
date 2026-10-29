import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi6e2wsjg.css';
import '../../css/h/htadhrmvh.css';
import '../../css/y/yq4bv2bbp.css';
import '../../css/s/sl8-1r0cl.css';
import '../../css/p/plw90hbta.css';
import '../../css/l/lqdjw6ckt.css';
import '../../css/z/ziicvifab.css';
import '../../css/r/rpq1tqbjn.css';
import '../../css/s/s43hu-twv.css';
import '../../css/p/pp763_jjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pi6e2wsjg wm-shadow"/><path class="htadhrmvh wm-shadow"/><path class="yq4bv2bbp"/><path class="sl8-1r0cl"/><path class="plw90hbta"/><path class="lqdjw6ckt"/><path class="wm-shine ziicvifab"/><path class="rpq1tqbjn wm-shine"/><path class="s43hu-twv"/><path class="pp763_jjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:message-circle-heart"} {...others} />);
}

export default Component;
