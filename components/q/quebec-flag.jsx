import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb4jxhscq.css';
import '../../css/j/jkq7-hbwz.css';
import '../../css/f/fwd7ygbhk.css';
import '../../css/p/ph-mjcb4f.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nb4jxhscq"/><path class="jkq7-hbwz"/><path class="fwd7ygbhk"/><path class="ph-mjcb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:quebec-flag"} {...others} />);
}

export default Component;
