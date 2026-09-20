import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex-9i5bwz.css';
import '../../css/t/t8un72y7g.css';
import '../../css/k/knbod-bet.css';
import '../../css/l/loauw7bpk.css';
import '../../css/f/f544vlbru.css';
import '../../css/j/jtir44bvg.css';
import '../../css/u/u-n35sbcj.css';
import '../../css/z/zt_e7hb6x.css';
import '../../css/i/i0i_b0e9m.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect fill="url(#SVGPdVYfclC)" class="ex-9i5bwz"/><path class="t8un72y7g"/><path class="knbod-bet"/><path class="loauw7bpk"/><path class="f544vlbru"/><path class="jtir44bvg"/><path class="u-n35sbcj"/><defs><linearGradient id="SVGPdVYfclC" x1="0" x2="256" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop class="zt_e7hb6x"/><stop offset="1" class="i0i_b0e9m"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:jquery"} {...others} />);
}

export default Component;
