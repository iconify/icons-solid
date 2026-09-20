import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k4c4y92dv.css';
import '../../css/d/dgl7atcnj.css';
import '../../css/o/ovhuo0v0s.css';
import '../../css/y/y7rsp_bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k4c4y92dv"/><path class="dgl7atcnj"/><path class="ovhuo0v0s"/><path class="y7rsp_bwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bookmark-bold-duotone"} {...others} />);
}

export default Component;
