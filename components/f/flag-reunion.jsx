import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/j/j6_bsfbzm.css';
import '../../css/k/kudkjjerd.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="j6_bsfbzm"/><path class="kudkjjerd"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-reunion"} {...others} />);
}

export default Component;
