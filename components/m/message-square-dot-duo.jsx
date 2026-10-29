import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tzfhybccw.css';
import '../../css/v/v5l32abxa.css';
import '../../css/x/x0w6nibqk.css';
import '../../css/y/y5dvwo25s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tzfhybccw"/><path class="v5l32abxa wm-s"/><path class="wm-s x0w6nibqk"/><path class="y5dvwo25s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-dot-duo"} {...others} />);
}

export default Component;
