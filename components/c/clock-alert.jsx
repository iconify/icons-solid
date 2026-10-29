import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q2s0b3b5j.css';
import '../../css/i/ijxc9x4ab.css';
import '../../css/n/n1__edbye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q2s0b3b5j wm-k"/><path class="ijxc9x4ab"/><path class="n1__edbye wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:clock-alert"} {...others} />);
}

export default Component;
