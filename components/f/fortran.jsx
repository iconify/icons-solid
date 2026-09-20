import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihvg17u1z.css';
import '../../css/u/unn2f711n.css';
import '../../css/w/wly120bjt.css';

const viewBox = {"width":300,"height":300};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGXA3UTcxh)"><path class="ihvg17u1z"/><path class="unn2f711n"/></g><defs><clipPath id="SVGXA3UTcxh"><path class="wly120bjt"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fortran"} {...others} />);
}

export default Component;
