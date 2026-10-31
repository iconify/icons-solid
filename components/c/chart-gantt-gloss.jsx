import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g0xhpib8o.css';
import '../../css/p/pbq_mpbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="g0xhpib8o wm-k"/><path class="pbq_mpbjf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-gantt-gloss"} {...others} />);
}

export default Component;
