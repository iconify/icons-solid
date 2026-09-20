import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p4236ubtm.css';
import '../../css/y/yithp4hrr.css';
import '../../css/w/w312zsb4r.css';
import '../../css/p/p5gw4-bye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p4236ubtm"/><path class="yithp4hrr"/><path class="w312zsb4r"/><path class="p5gw4-bye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kanban-square-line-duotone"} {...others} />);
}

export default Component;
