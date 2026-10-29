import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vrr1sqbbb.css';
import '../../css/p/p_xj8acnx.css';
import '../../css/h/hdm5_-v4o.css';
import '../../css/k/knf-w_g_n.css';
import '../../css/l/l6x9gjbcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vrr1sqbbb"/><path class="p_xj8acnx wm-a"/><path class="hdm5_-v4o wm-a"/><path class="knf-w_g_n"/><path class="l6x9gjbcy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:guitar-duo"} {...others} />);
}

export default Component;
