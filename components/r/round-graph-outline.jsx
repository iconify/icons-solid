import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/axm7mdb8n.css';
import '../../css/u/uxddagbff.css';
import '../../css/p/p-tl4pbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="axm7mdb8n"/><path class="uxddagbff"/><path class="p-tl4pbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-graph-outline"} {...others} />);
}

export default Component;
