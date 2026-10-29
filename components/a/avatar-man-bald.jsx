import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d08j53qld.css';
import '../../css/h/hyiv-xb_h.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/t/t_sk1gbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d08j53qld"/><path class="hyiv-xb_h"/><path class="qk9xa2v5m"/><path class="t_sk1gbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-man-bald"} {...others} />);
}

export default Component;
