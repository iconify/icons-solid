import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mh814j51o.css';
import '../../css/c/cglaq54nl.css';
import '../../css/q/q4xrmcbpa.css';
import '../../css/k/kpoterrtk.css';
import '../../css/v/vftedud3y.css';
import '../../css/e/ew2od8bsa.css';
import '../../css/s/sd9lj-blo.css';
import '../../css/v/vnx_hu_2a.css';
import '../../css/h/hh9cg0bln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mh814j51o wm-a"/><path class="cglaq54nl wm-s"/><circle class="q4xrmcbpa wm-s"/><path class="kpoterrtk wm-s"/><ellipse class="vftedud3y wm-s"/><path class="ew2od8bsa wm-s"/><path class="sd9lj-blo wm-k"/><rect class="vnx_hu_2a wm-k"/><path class="hh9cg0bln wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-bucket-engrave"} {...others} />);
}

export default Component;
