import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_z7fdbep.css';
import '../../css/h/h486o72qc.css';
import '../../css/h/hxp3x6giq.css';
import '../../css/i/i-1sf7l7l.css';
import '../../css/y/y7qzs7brd.css';
import '../../css/d/d_gvw4byi.css';
import '../../css/u/uryg7ujum.css';
import '../../css/t/t7ds83bii.css';
import '../../css/m/mpw-6nekb.css';
import '../../css/i/i1b--ebzt.css';
import '../../css/a/aexeblbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p_z7fdbep wm-shadow"/><path class="h486o72qc wm-shadow"/><path class="hxp3x6giq"/><path class="i-1sf7l7l"/><path class="y7qzs7brd"/><path class="d_gvw4byi"/><path class="uryg7ujum wm-shine"/><path class="t7ds83bii wm-shine"/><path class="mpw-6nekb"/><path class="i1b--ebzt"/><path class="aexeblbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:shankh"} {...others} />);
}

export default Component;
