import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kba12nbbt.css';
import '../../css/p/p3aehbcct.css';

const viewBox = {"width":130,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGlvgrFbyM)" class="cuyn6tgcc"><path class="kba12nbbt"/></g><defs><clipPath id="SVGlvgrFbyM"><path class="p3aehbcct"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:minnesota-wild"} {...others} />);
}

export default Component;
