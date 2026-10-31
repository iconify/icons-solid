import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t3l-p37pn.css';
import '../../css/o/oqhk8nbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="t3l-p37pn wm-k"/><path class="oqhk8nbks wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-ring-gloss"} {...others} />);
}

export default Component;
