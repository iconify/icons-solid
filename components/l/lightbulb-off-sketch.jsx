import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vr07_r38u.css';
import '../../css/x/xjelv0bve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vr07_r38u wm-k"/><path class="wm-s xjelv0bve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lightbulb-off-sketch"} {...others} />);
}

export default Component;
