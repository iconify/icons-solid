import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g6o6dkstb.css';
import '../../css/n/n8g7nf3gn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="g6o6dkstb wm-k"/><path class="n8g7nf3gn wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-older-man-gloss"} {...others} />);
}

export default Component;
