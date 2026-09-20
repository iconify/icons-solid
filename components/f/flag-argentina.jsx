import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/j/jkq7-hbwz.css';
import '../../css/z/zgt54ob8c.css';
import '../../css/s/s-7egrbyy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="jkq7-hbwz"/><path class="zgt54ob8c"/><path class="s-7egrbyy"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-argentina"} {...others} />);
}

export default Component;
