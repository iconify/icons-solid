import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rwzkv6b2g.css';
import '../../css/u/uqhik9b3f.css';
import '../../css/d/d-03ckbqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rwzkv6b2g"/><path class="uqhik9b3f"/><path class="d-03ckbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:history-2-broken"} {...others} />);
}

export default Component;
