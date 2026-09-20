import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ip5zz346n.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/p/pl16qnbxx.css';
import '../../css/q/qb4wniidq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ip5zz346n"/><circle class="dtl23o_xq"/><circle class="pl16qnbxx"/><path class="qb4wniidq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-minus-line-duotone"} {...others} />);
}

export default Component;
