import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6m2w-bsk.css';
import '../../css/s/s6rvgpb4y.css';
import '../../css/j/jjvzbdjsf.css';
import '../../css/j/j_vuig2ic.css';
import '../../css/u/uxjs3bcsg.css';
import '../../css/j/j15ty4b9p.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="n6m2w-bsk"/><path class="s6rvgpb4y"/><path class="jjvzbdjsf"/><path class="j_vuig2ic"/><path class="uxjs3bcsg"/></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:pnpm-light"} {...others} />);
}

export default Component;
