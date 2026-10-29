import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpm45zxlf.css';
import '../../css/h/hc8k8ubtr.css';
import '../../css/m/m36yv5bge.css';
import '../../css/z/zsm7vykbb.css';
import '../../css/r/rvbmluy2d.css';
import '../../css/n/n54jbo4jc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dpm45zxlf wm-k"/><path class="hc8k8ubtr wm-k"/><path class="m36yv5bge wm-k"/><path class="wm-a zsm7vykbb"/><path class="rvbmluy2d wm-a"/><path class="n54jbo4jc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:recycle"} {...others} />);
}

export default Component;
