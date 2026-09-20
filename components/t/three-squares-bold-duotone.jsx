import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ff9s5t-qh.css';
import '../../css/j/jhs71nb5c.css';
import '../../css/d/dicbf-s8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ff9s5t-qh"/><path class="jhs71nb5c"/><rect class="dicbf-s8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:three-squares-bold-duotone"} {...others} />);
}

export default Component;
