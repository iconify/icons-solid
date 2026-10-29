import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wo259ue5g.css';
import '../../css/z/zb6mz35nb.css';
import '../../css/g/gv5fj_e6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wo259ue5g"/><path class="wm-a zb6mz35nb"/><path class="gv5fj_e6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:vr-headset-duo"} {...others} />);
}

export default Component;
