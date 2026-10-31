import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6k3dub4i.css';
import '../../css/h/h0umzdv8a.css';
import '../../css/l/l34nlwb7u.css';
import '../../css/q/qle_1jw5k.css';
import '../../css/d/d2_frsbri.css';
import '../../css/u/uv5gbcbde.css';
import '../../css/a/ag8rd0bgw.css';
import '../../css/h/hi3kw1b0g.css';
import '../../css/y/y1iz5bcrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m6k3dub4i wm-k"/><path class="h0umzdv8a wm-s"/><path class="l34nlwb7u wm-deco"/><path class="qle_1jw5k wm-k"/><path class="d2_frsbri wm-s"/><path class="uv5gbcbde wm-shadow"/><path class="ag8rd0bgw wm-shine"/><path class="hi3kw1b0g wm-shine"/><path class="wm-shine y1iz5bcrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:image-off"} {...others} />);
}

export default Component;
