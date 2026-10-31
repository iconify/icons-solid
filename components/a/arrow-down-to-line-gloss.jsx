import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tbroity_m.css';
import '../../css/l/l8dp9ebhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="tbroity_m wm-k"/><path class="l8dp9ebhy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-down-to-line-gloss"} {...others} />);
}

export default Component;
