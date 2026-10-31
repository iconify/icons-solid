import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lc7-_ubpm.css';
import '../../css/j/jbwnju6cw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="lc7-_ubpm wm-k"/><path class="jbwnju6cw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-gloss"} {...others} />);
}

export default Component;
