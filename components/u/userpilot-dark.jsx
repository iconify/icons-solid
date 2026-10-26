import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nsfr-ie6p.css';
import '../../css/p/p1o8i6baa.css';

const viewBox = {"width":360,"height":360};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGx5gPieiZ)"><path class="nsfr-ie6p"/></g><defs><clipPath id="SVGx5gPieiZ"><path class="p1o8i6baa"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:userpilot-dark"} {...others} />);
}

export default Component;
