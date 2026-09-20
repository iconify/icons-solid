import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/minr5gc1v.css';
import '../../css/d/d3drq-8cq.css';
import '../../css/v/vr5t-cbds.css';
import '../../css/v/v50u05_ah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="minr5gc1v"/><path class="d3drq-8cq"/><path class="vr5t-cbds"/><path class="v50u05_ah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-close-bold"} {...others} />);
}

export default Component;
