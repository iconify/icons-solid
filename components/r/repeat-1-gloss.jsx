import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uyx66s80w.css';
import '../../css/m/mv2y5qbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="uyx66s80w wm-k"/><path class="mv2y5qbbr wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:repeat-1-gloss"} {...others} />);
}

export default Component;
