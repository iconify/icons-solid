import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1o8i6baa.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aib1mvbgu.css';
import '../../css/d/d3qb-9bga.css';
import '../../css/w/w4sl_-dce.css';

const viewBox = {"width":360,"height":360};
const content = `<defs><path id="SVGKnpvmbbh" class="p1o8i6baa"/></defs><g class="ft5dv1b6b"><g clip-path="url(#SVGqI5mxgEY)"><g clip-path="url(#SVGqI5mxgEY)"><path class="aib1mvbgu"/><path class="d3qb-9bga"/><path class="w4sl_-dce"/></g></g><defs><clipPath id="SVGqI5mxgEY"><use href="#SVGKnpvmbbh"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:opensea"} {...others} />);
}

export default Component;
