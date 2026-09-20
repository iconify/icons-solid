import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bxduv9kxn.css';
import '../../css/o/o5wv6r8pk.css';
import '../../css/r/rq_0dy_2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bxduv9kxn"/><path class="o5wv6r8pk"/><path class="rq_0dy_2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sim-cards-line-duotone"} {...others} />);
}

export default Component;
