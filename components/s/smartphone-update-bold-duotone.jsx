import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q9eg9wyrd.css';
import '../../css/x/x4wk69b-d.css';
import '../../css/n/nsy8q-7oc.css';
import '../../css/k/khuzgeblh.css';
import '../../css/f/fng6irbns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG6WNJNcPe)" class="cuyn6tgcc"><path class="q9eg9wyrd"/><path class="x4wk69b-d"/><path class="nsy8q-7oc"/><path class="khuzgeblh"/></g><defs><clipPath id="SVG6WNJNcPe"><rect class="fng6irbns"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-update-bold-duotone"} {...others} />);
}

export default Component;
