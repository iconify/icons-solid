import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwyi0tb1p.css';
import '../../css/z/zcyzjnabt.css';
import '../../css/m/m4ami6cae.css';
import '../../css/b/bf_uu0kfi.css';
import '../../css/t/t8dxhb0ab.css';
import '../../css/o/okszcssbb.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/d3aglbb1z.css';
import '../../css/n/nd6eaxbbd.css';

const viewBox = {"width":72,"height":72};
const content = `<circle transform="rotate(-15 28.702 23.307)" class="gwyi0tb1p"/><circle transform="rotate(-45 15.492 30.157)" class="zcyzjnabt"/><ellipse transform="rotate(-44.992 56.515 30.153)" class="m4ami6cae"/><path class="bf_uu0kfi"/><path class="t8dxhb0ab"/><path class="okszcssbb"/><g class="ij2x_72vy"><path class="d3aglbb1z"/><path class="nd6eaxbbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:taco"} {...others} />);
}

export default Component;
