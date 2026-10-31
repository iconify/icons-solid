import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yvlt6ab8p.css';
import '../../css/p/pa9c2mb1b.css';
import '../../css/l/ly85x_b-a.css';
import '../../css/c/cpud5n4fy.css';
import '../../css/y/yqwxfrbbv.css';
import '../../css/s/sy03c705e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yvlt6ab8p"/><path class="pa9c2mb1b"/><path class="ly85x_b-a"/><path class="cpud5n4fy"/><path class="yqwxfrbbv"/><path class="sy03c705e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:receipt"} {...others} />);
}

export default Component;
