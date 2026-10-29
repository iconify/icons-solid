import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w4ybr21ce.css';
import '../../css/k/kog6mrbkd.css';
import '../../css/n/nw3oz4bpg.css';
import '../../css/q/qrdk4qbxh.css';
import '../../css/d/dt6_6gbct.css';
import '../../css/w/w6c7h0bgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="w4ybr21ce wm-shadow"/><path class="kog6mrbkd"/><path class="nw3oz4bpg"/><path class="qrdk4qbxh"/><path class="dt6_6gbct wm-shine"/><path class="w6c7h0bgs wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:a-large-small"} {...others} />);
}

export default Component;
