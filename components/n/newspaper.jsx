import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5y7a56du.css';
import '../../css/u/u_gpcgu-s.css';
import '../../css/w/w6qr91ntb.css';
import '../../css/m/m_1s-6-7n.css';
import '../../css/g/g3w2wqbtg.css';
import '../../css/n/n-o2k4boe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j5y7a56du"/><path class="u_gpcgu-s"/><path class="w6qr91ntb"/><path class="m_1s-6-7n"/><path class="g3w2wqbtg"/><path class="n-o2k4boe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:newspaper"} {...others} />);
}

export default Component;
