import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dgg1804dh.css';
import '../../css/f/fg7tt6bjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="dgg1804dh wm-k"/><path class="fg7tt6bjc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-off-gloss"} {...others} />);
}

export default Component;
