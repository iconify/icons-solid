import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q0d403bvx.css';
import '../../css/j/j0phbobiu.css';
import '../../css/p/pfb2ouljy.css';
import '../../css/w/wzwimxbdj.css';
import '../../css/h/hq5jsrm0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q0d403bvx wm-shadow"/><path class="j0phbobiu"/><path class="pfb2ouljy"/><path class="wzwimxbdj"/><path class="hq5jsrm0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:send-horizontal"} {...others} />);
}

export default Component;
