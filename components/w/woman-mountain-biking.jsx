import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glhe7bguv.css';
import '../../css/l/ll9vxuj4s.css';
import '../../css/j/jmhfz6b1g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="glhe7bguv"/><path class="ll9vxuj4s"/><path class="jmhfz6b1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-mountain-biking"} {...others} />);
}

export default Component;
