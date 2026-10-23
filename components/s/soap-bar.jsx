import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqezob1ro.css';
import '../../css/t/t282lrbow.css';
import '../../css/w/w4w4f9b2p.css';
import '../../css/e/ee_d7_b5s.css';
import '../../css/j/j88cg7blc.css';
import '../../css/t/tabi_yrlu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bqezob1ro"/><rect class="t282lrbow"/><rect class="w4w4f9b2p"/><path class="ee_d7_b5s"/><path class="j88cg7blc"/><path class="tabi_yrlu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:soap-bar"} {...others} />);
}

export default Component;
