import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lkonv1d3d.css';
import '../../css/g/gkxcr3bvl.css';
import '../../css/w/wi19j-lxz.css';
import '../../css/p/pz6n94bed.css';
import '../../css/j/jfnfrsbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lkonv1d3d wm-k"/><path class="gkxcr3bvl wm-k"/><path class="wi19j-lxz wm-k"/><path class="pz6n94bed wm-a"/><path class="jfnfrsbiy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alert-circle-sketch"} {...others} />);
}

export default Component;
