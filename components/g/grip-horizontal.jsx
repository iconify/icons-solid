import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_6ykqbbf.css';
import '../../css/j/jnrliz2ln.css';
import '../../css/w/wke-b-b2t.css';
import '../../css/f/fu7cccbuv.css';
import '../../css/j/j5xvhzb9i.css';
import '../../css/i/icxwu-h_q.css';
import '../../css/p/p1nect1bl.css';
import '../../css/a/ad_qcpbuf.css';
import '../../css/o/ogbknylps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d_6ykqbbf wm-shadow"/><path class="jnrliz2ln wm-shadow"/><path class="wke-b-b2t"/><path class="fu7cccbuv"/><path class="j5xvhzb9i"/><path class="icxwu-h_q"/><path class="p1nect1bl wm-shine"/><path class="ad_qcpbuf wm-shine"/><path class="ogbknylps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:grip-horizontal"} {...others} />);
}

export default Component;
