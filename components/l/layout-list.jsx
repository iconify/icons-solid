import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pnjyjzbrr.css';
import '../../css/w/wosaks6nq.css';
import '../../css/y/ytz3bmr-g.css';
import '../../css/q/qj1kjybuz.css';
import '../../css/b/bgqj8wqog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pnjyjzbrr wm-shadow"/><path class="wosaks6nq"/><path class="ytz3bmr-g"/><path class="qj1kjybuz"/><path class="bgqj8wqog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:layout-list"} {...others} />);
}

export default Component;
