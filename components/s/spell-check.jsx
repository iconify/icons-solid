import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/ntk77cjno.css';
import '../../css/r/rwb6pjm8l.css';
import '../../css/t/txjqpib4m.css';
import '../../css/y/yjs7b6b2y.css';
import '../../css/j/j4v4v-bvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ntk77cjno wm-shadow"/><path class="rwb6pjm8l wm-shadow"/><path class="txjqpib4m"/><path class="yjs7b6b2y"/><path class="j4v4v-bvw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:spell-check"} {...others} />);
}

export default Component;
