import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nz6bs_9-c.css';
import '../../css/w/whsg3sbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="nz6bs_9-c wm-k"/><path class="whsg3sbgf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chopsticks-gloss"} {...others} />);
}

export default Component;
