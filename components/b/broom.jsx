import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ik3rcq8gk.css';
import '../../css/j/j28vspsyx.css';
import '../../css/c/ch63jbz1a.css';
import '../../css/g/g2ez45bji.css';
import '../../css/q/q88db6m0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ik3rcq8gk wm-shadow"/><path class="j28vspsyx"/><path class="ch63jbz1a"/><path class="g2ez45bji"/><path class="q88db6m0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:broom"} {...others} />);
}

export default Component;
