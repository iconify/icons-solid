import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qgab7acjg.css';
import '../../css/y/ysy9eib6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="qgab7acjg wm-k"/><path class="wm-s ysy9eib6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lion-head-gloss"} {...others} />);
}

export default Component;
