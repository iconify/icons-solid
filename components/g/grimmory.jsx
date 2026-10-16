import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7tckt4vh.css';
import '../../css/u/u1yj1j9ok.css';
import '../../css/h/hr1r94x7o.css';
import '../../css/r/ra0tde6lz.css';
import '../../css/y/yfymn2bvd.css';

const viewBox = {"width":814,"height":1024};
const content = `<g class="ft5dv1b6b"><path class="k7tckt4vh"/><path fill="url(#SVGzdw8hbHt)" class="u1yj1j9ok"/><path fill="url(#SVGzdw8hbHt)" class="hr1r94x7o"/><defs><linearGradient id="SVGzdw8hbHt" x1="407" x2="407" y1="0" y2="971.473" gradientUnits="userSpaceOnUse"><stop class="ra0tde6lz"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:grimmory"} {...others} />);
}

export default Component;
