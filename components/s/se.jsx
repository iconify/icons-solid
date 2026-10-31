import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rif5jcvyy.css';
import '../../css/m/m3xlfc_1e.css';
import '../../css/q/q0v-vmbei.css';

const viewBox = {"width":301,"height":189};
const content = `<g class="ft5dv1b6b"><path class="rif5jcvyy"/><path class="m3xlfc_1e"/><path class="q0v-vmbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:se"} {...others} />);
}

export default Component;
