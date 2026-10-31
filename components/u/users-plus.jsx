import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cxpl0dpti.css';
import '../../css/c/c2mxj3bwl.css';
import '../../css/j/j524vjwlf.css';
import '../../css/y/ylymz3bds.css';
import '../../css/g/g40r1-b2g.css';
import '../../css/i/ieiphgbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cxpl0dpti wm-shadow"/><path class="c2mxj3bwl"/><path class="j524vjwlf"/><path class="ylymz3bds"/><path class="g40r1-b2g"/><path class="ieiphgbqw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:users-plus"} {...others} />);
}

export default Component;
