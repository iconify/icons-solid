import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dzuu9sb6n.css';
import '../../css/w/wf8yifq6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="dzuu9sb6n wm-k"/><path class="wf8yifq6l wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lotus-gloss"} {...others} />);
}

export default Component;
