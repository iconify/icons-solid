import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vdeolzlvj.css';
import '../../css/c/ce_46szpi.css';
import '../../css/h/hu_jxvb4f.css';
import '../../css/x/xhqykhbni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vdeolzlvj wm-shadow"/><path class="ce_46szpi"/><path class="hu_jxvb4f"/><path class="xhqykhbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:paint-roller"} {...others} />);
}

export default Component;
