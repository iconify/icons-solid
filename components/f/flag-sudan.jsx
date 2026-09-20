import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/n/njwtk9bwg.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/b/bjo8q2blr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="njwtk9bwg"/><path class="e_6_n4b0n"/><path class="bjo8q2blr"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-sudan"} {...others} />);
}

export default Component;
