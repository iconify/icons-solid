import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1jwqxbwc.css';
import '../../css/o/onmnzxzya.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hqn-ljbgu.css';
import '../../css/s/s8lqfob4z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q1jwqxbwc"/><path class="onmnzxzya"/><g class="jn8qy4bru"><path class="hqn-ljbgu"/><path class="s8lqfob4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pick"} {...others} />);
}

export default Component;
