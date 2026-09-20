import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mumlfxeax.css';
import '../../css/t/tp6_eczdr.css';

const viewBox = {"width":96,"height":96};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGfnsgKogg)"><path clip-rule="evenodd" class="mumlfxeax"/></g><defs><clipPath id="SVGfnsgKogg"><path class="tp6_eczdr"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:zed-light"} {...others} />);
}

export default Component;
