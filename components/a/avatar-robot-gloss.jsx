import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w7saaorqp.css';
import '../../css/p/peysjjmve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="w7saaorqp wm-k"/><path class="peysjjmve wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-robot-gloss"} {...others} />);
}

export default Component;
