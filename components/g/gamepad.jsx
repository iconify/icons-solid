import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ab4u36bki.css';
import '../../css/j/jn4exerel.css';
import '../../css/c/cug3_1n-c.css';
import '../../css/m/m2139qo2q.css';
import '../../css/d/d5w-q0byt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ab4u36bki wm-shadow"/><path class="jn4exerel"/><path class="cug3_1n-c"/><path class="m2139qo2q"/><path class="d5w-q0byt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:gamepad"} {...others} />);
}

export default Component;
