import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wv-8r7bgs.css';
import '../../css/i/i7mlj-bie.css';
import '../../css/a/aahuem5iv.css';
import '../../css/p/p45p4qipm.css';
import '../../css/q/qal905bnb.css';
import '../../css/t/t7n1q_b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco wv-8r7bgs"/><path class="i7mlj-bie wm-deco"/><path class="aahuem5iv wm-deco"/><path class="p45p4qipm wm-k"/><path class="qal905bnb wm-a"/><path class="t7n1q_b_g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cctv-blueprint"} {...others} />);
}

export default Component;
