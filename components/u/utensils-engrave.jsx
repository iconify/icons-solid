import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yaw5m1b_l.css';
import '../../css/s/sh3pkj7iv.css';
import '../../css/s/sywd01ygq.css';
import '../../css/l/l5-650bny.css';
import '../../css/d/dcqemvmzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yaw5m1b_l"/><path class="sh3pkj7iv wm-a"/><path class="sywd01ygq wm-shadow"/><path class="l5-650bny wm-k"/><path class="dcqemvmzx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:utensils-engrave"} {...others} />);
}

export default Component;
