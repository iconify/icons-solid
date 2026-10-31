import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/meouyj_nd.css';
import '../../css/i/i89luqb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="meouyj_nd wm-k"/><path class="i89luqb-a wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unlink-gloss"} {...others} />);
}

export default Component;
