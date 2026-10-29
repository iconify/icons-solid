import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgf9gccco.css';
import '../../css/s/srihoiovq.css';
import '../../css/x/xovw5kbij.css';
import '../../css/l/leo_794wg.css';
import '../../css/k/k0k4wr5ax.css';
import '../../css/m/mxqh57bko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wgf9gccco wm-k"/><path class="srihoiovq wm-k"/><path class="wm-k xovw5kbij"/><path class="leo_794wg wm-k"/><path class="k0k4wr5ax wm-shine"/><path class="mxqh57bko wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:sd-card"} {...others} />);
}

export default Component;
