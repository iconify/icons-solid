import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6m2w-bsk.css';
import '../../css/k/kz4yfpb-q.css';
import '../../css/i/ikig1ps_h.css';
import '../../css/x/x88peqmyv.css';
import '../../css/x/xoeo-bckc.css';
import '../../css/z/zb81l8bly.css';
import '../../css/i/i-lbwwbjm.css';
import '../../css/j/j15ty4b9p.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="n6m2w-bsk"/><path class="kz4yfpb-q"/><path class="ikig1ps_h"/><path class="x88peqmyv"/><path class="xoeo-bckc"/><path class="zb81l8bly"/><path class="i-lbwwbjm"/></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:pkl-light"} {...others} />);
}

export default Component;
