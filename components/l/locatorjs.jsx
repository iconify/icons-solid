import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy96ujbrd.css';
import '../../css/h/hmlc5fb3d.css';
import '../../css/k/kbe-261rl.css';
import '../../css/e/enh8fyb3f.css';

const viewBox = {"width":64,"height":64};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGI6q2hdHO)" clip-rule="evenodd" class="sy96ujbrd"/><path class="hmlc5fb3d"/><defs><linearGradient id="SVGI6q2hdHO" x1="0" x2="46.411" y1="0" y2="46.926" gradientUnits="userSpaceOnUse"><stop class="kbe-261rl"/><stop offset="1" class="enh8fyb3f"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:locatorjs"} {...others} />);
}

export default Component;
