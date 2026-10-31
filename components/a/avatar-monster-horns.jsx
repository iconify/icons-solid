import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nz8ejj8-b.css';
import '../../css/v/v820zcbdp.css';
import '../../css/q/q562_q5-v.css';
import '../../css/z/z7trbibch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nz8ejj8-b wm-shadow"/><path class="v820zcbdp"/><path class="q562_q5-v"/><path class="z7trbibch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-monster-horns"} {...others} />);
}

export default Component;
