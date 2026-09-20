import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/r/r73utib8z.css';
import '../../css/j/j9hvk9blt.css';
import '../../css/o/o60a876se.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="e_6_n4b0n"/><path class="r73utib8z"/><path class="j9hvk9blt"/><circle class="o60a876se"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-paraguay"} {...others} />);
}

export default Component;
