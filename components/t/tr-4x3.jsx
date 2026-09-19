import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jz3aueb9n.css';
import '../../css/v/vrq3k-bda.css';
import '../../css/i/ixlvp4jdq.css';
import '../../css/o/oqn965wzr.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="jz3aueb9n"/><path class="vrq3k-bda"/><path class="ixlvp4jdq"/><path class="oqn965wzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tr-4x3"} {...others} />);
}

export default Component;
