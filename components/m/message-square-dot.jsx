import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oynxntbra.css';
import '../../css/g/greb0hbny.css';
import '../../css/y/y6t364b4o.css';
import '../../css/p/pj410_9dw.css';
import '../../css/z/z9yjbnuzi.css';
import '../../css/w/wj5g4eutf.css';
import '../../css/o/ou6l0zbvo.css';
import '../../css/r/ru34ewbrd.css';
import '../../css/q/q-jv2mb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oynxntbra wm-k"/><path class="greb0hbny wm-k"/><path class="wm-k y6t364b4o"/><path class="pj410_9dw wm-k"/><path class="wm-shine z9yjbnuzi"/><path class="wj5g4eutf wm-s"/><path class="ou6l0zbvo wm-s"/><path class="ru34ewbrd wm-s"/><path class="q-jv2mb2r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:message-square-dot"} {...others} />);
}

export default Component;
