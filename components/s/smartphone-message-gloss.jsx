import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i-vts3tnk.css';
import '../../css/p/p4_wxwbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="i-vts3tnk wm-k"/><path class="p4_wxwbmv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smartphone-message-gloss"} {...others} />);
}

export default Component;
