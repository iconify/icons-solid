import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/psojypbns.css';
import '../../css/w/wgm9k5bro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="psojypbns"/><path class="wgm9k5bro wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:holi-splash-solid"} {...others} />);
}

export default Component;
