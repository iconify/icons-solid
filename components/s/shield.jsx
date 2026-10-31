import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecl9mibod.css';
import '../../css/n/nbzr46bna.css';
import '../../css/j/jw1kjlzwx.css';
import '../../css/y/y-275v1vl.css';
import '../../css/h/hu33ufrcx.css';
import '../../css/o/o1q4qwg7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ecl9mibod wm-shadow"/><path class="nbzr46bna"/><path class="jw1kjlzwx"/><path class="y-275v1vl"/><path class="hu33ufrcx"/><path class="o1q4qwg7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shield"} {...others} />);
}

export default Component;
