import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vpb8ptbte.css';
import '../../css/f/f_wobbxna.css';
import '../../css/s/srwwv-s6o.css';
import '../../css/g/grszprbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vpb8ptbte wm-k"/><path class="f_wobbxna wm-s"/><path class="srwwv-s6o"/><path class="grszprbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bell-dot"} {...others} />);
}

export default Component;
