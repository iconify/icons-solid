import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dg3lobkil.css';
import '../../css/z/zt4v2yr9g.css';
import '../../css/l/l_3c_lb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dg3lobkil"/><path class="zt4v2yr9g"/><circle class="l_3c_lb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-circle-line-duotone"} {...others} />);
}

export default Component;
