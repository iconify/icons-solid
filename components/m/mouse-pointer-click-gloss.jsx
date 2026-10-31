import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vji6bu2th.css';
import '../../css/q/qmwab792q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="vji6bu2th wm-k"/><path class="qmwab792q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mouse-pointer-click-gloss"} {...others} />);
}

export default Component;
