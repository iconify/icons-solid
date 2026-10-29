import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vghtvybyf.css';
import '../../css/s/smls78shz.css';
import '../../css/i/ic5g_yble.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vghtvybyf"/><path class="smls78shz wm-a"/><path class="ic5g_yble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:door-closed-duo"} {...others} />);
}

export default Component;
