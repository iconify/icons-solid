import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g51eo9btu.css';
import '../../css/w/wgejfybyc.css';
import '../../css/y/y_z-znu8u.css';
import '../../css/y/ykcza1bmk.css';
import '../../css/i/ir5ig6bih.css';
import '../../css/k/knai_j-yl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g51eo9btu wm-shadow"/><path class="wgejfybyc"/><path class="y_z-znu8u"/><path class="ykcza1bmk"/><path class="ir5ig6bih"/><path class="knai_j-yl wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heater"} {...others} />);
}

export default Component;
