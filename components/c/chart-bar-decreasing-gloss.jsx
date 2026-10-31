import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ob434os8l.css';
import '../../css/p/p2r-q7b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ob434os8l wm-k"/><path class="p2r-q7b3v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-decreasing-gloss"} {...others} />);
}

export default Component;
