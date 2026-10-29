import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oye_q3fhr.css';
import '../../css/v/vq_y3vp5k.css';
import '../../css/v/vj77h6eyt.css';
import '../../css/g/g29ybgzbd.css';
import '../../css/j/jk4vc4b5t.css';
import '../../css/p/p22tphf1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oye_q3fhr wm-k"/><path class="vq_y3vp5k wm-k"/><path class="vj77h6eyt wm-k"/><path class="g29ybgzbd wm-a"/><path class="jk4vc4b5t wm-a"/><path class="p22tphf1q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:scan"} {...others} />);
}

export default Component;
