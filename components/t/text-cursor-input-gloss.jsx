import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bnx-5n-rd.css';
import '../../css/q/q65xftc-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="bnx-5n-rd wm-k"/><path class="q65xftc-v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-cursor-input-gloss"} {...others} />);
}

export default Component;
