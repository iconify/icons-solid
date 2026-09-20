import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vw4esubrn.css';
import '../../css/z/zoepyyq4j.css';
import '../../css/z/z3hbucb_l.css';
import '../../css/i/id9cc5l6h.css';
import '../../css/r/rt8kpfwzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vw4esubrn"/><path class="zoepyyq4j"/><path class="z3hbucb_l"/><path class="id9cc5l6h"/><path class="rt8kpfwzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wheel-angle-line-duotone"} {...others} />);
}

export default Component;
