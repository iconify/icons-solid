import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w5m7spedc.css';
import '../../css/v/vxi9_t2ne.css';
import '../../css/i/ikiy7bbxo.css';
import '../../css/m/mw3tpyb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w5m7spedc"/><path class="vxi9_t2ne"/><path class="ikiy7bbxo"/><path class="mw3tpyb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-panda"} {...others} />);
}

export default Component;
