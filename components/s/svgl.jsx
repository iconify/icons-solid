import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_hswibar.css';
import '../../css/c/ci61avbfu.css';
import '../../css/s/sbhzribxd.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><rect fill="url(#SVGvdp9QbRA)" paint-order="stroke" class="i_hswibar"/><defs><radialGradient id="SVGvdp9QbRA" cx="50%" cy="50%" r="100%" fx="50%" fy="0%" gradientUnits="objectBoundingBox"><stop class="ci61avbfu"/><stop offset="1"/></radialGradient></defs><path class="sbhzribxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:svgl"} {...others} />);
}

export default Component;
