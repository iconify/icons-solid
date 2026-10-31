import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrkt44w3z.css';
import '../../css/k/kbtzegsso.css';
import '../../css/y/yluolacah.css';
import '../../css/g/gv47_tbmn.css';
import '../../css/w/wl1easbak.css';
import '../../css/d/dz71fgbkf.css';
import '../../css/t/tnk4ydfpt.css';

const viewBox = {"width":301,"height":151};
const content = `<g transform="translate(1 1)" class="ft5dv1b6b"><path class="rrkt44w3z"/><path class="kbtzegsso"/><path class="yluolacah"/><path class="gv47_tbmn"/><path class="wl1easbak"/><circle class="dz71fgbkf"/><path class="tnk4ydfpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:nu"} {...others} />);
}

export default Component;
