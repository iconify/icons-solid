import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gckbdacgp.css';
import '../../css/g/gt3_0hbgl.css';
import '../../css/x/xqpnc4m6o.css';
import '../../css/g/go5n_1h8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gckbdacgp"/><path class="gt3_0hbgl wm-s"/><path class="xqpnc4m6o"/><path class="go5n_1h8p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-charging-duo"} {...others} />);
}

export default Component;
