import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t-rxirbbe.css';
import '../../css/w/wo-flbbds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="t-rxirbbe wm-k"/><path class="wm-s wo-flbbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shower-head-gloss"} {...others} />);
}

export default Component;
