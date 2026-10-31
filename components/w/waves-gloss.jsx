import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h8-xhlb7q.css';
import '../../css/i/iw0b69bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="h8-xhlb7q wm-k"/><path class="iw0b69bjs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:waves-gloss"} {...others} />);
}

export default Component;
