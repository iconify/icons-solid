import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q_9pyo6hu.css';
import '../../css/h/h0rhmfbpn.css';
import '../../css/u/uu_zhdcpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q_9pyo6hu"/><path class="h0rhmfbpn wm-a"/><path class="uu_zhdcpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:send-horizontal-duo"} {...others} />);
}

export default Component;
