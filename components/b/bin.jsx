import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oibf0yb_r.css';
import '../../css/c/cgqjoccae.css';
import '../../css/q/qde_v4hpo.css';
import '../../css/f/fhkwawcdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oibf0yb_r"/><path class="cgqjoccae"/><path class="qde_v4hpo"/><path class="fhkwawcdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bin"} {...others} />);
}

export default Component;
