import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5a5yrzvq.css';
import '../../css/j/jutld8uev.css';
import '../../css/w/ws2miw3gm.css';
import '../../css/b/blhfju6_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t5a5yrzvq"/><path class="jutld8uev"/><path class="ws2miw3gm"/><path class="blhfju6_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bubble-chat-smiley-face-2"} {...others} />);
}

export default Component;
