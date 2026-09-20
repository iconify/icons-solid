import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y1pfzzkpg.css';
import '../../css/m/m-176303h.css';
import '../../css/o/oo-u0obqs.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGBgS7qSkY)" class="cuyn6tgcc"><path clip-rule="evenodd" class="y1pfzzkpg"/><path class="m-176303h"/><path clip-rule="evenodd" class="oo-u0obqs"/></g><defs><clipPath id="SVGBgS7qSkY"><path class="w49j0rbvv"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:basket-down"} {...others} />);
}

export default Component;
