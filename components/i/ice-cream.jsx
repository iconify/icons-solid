import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kp_28hbcr.css';
import '../../css/j/j7aucs4nb.css';
import '../../css/s/s1o8s50en.css';
import '../../css/t/t6q0p4bxh.css';
import '../../css/r/ri-igub5j.css';
import '../../css/s/s0lin7ebv.css';
import '../../css/k/knofcfbih.css';
import '../../css/e/ebpm9cbcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kp_28hbcr"/><path class="j7aucs4nb"/><path class="s1o8s50en wm-shine"/><path class="t6q0p4bxh wm-k"/><path class="ri-igub5j wm-a"/><path class="s0lin7ebv"/><path class="knofcfbih"/><path class="ebpm9cbcw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ice-cream"} {...others} />);
}

export default Component;
