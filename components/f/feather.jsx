import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrf--cblg.css';
import '../../css/m/mzwvp5ncc.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f2p50r4es.css';
import '../../css/a/aq5dl2b5q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yrf--cblg"/><path class="mzwvp5ncc"/><g class="jn8qy4bru"><path class="f2p50r4es"/><path class="aq5dl2b5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:feather"} {...others} />);
}

export default Component;
