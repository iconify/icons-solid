import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/an--fmawt.css';
import '../../css/p/p2-28vwqt.css';
import '../../css/k/kdx2-qp7s.css';
import '../../css/p/pjpaztbao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="an--fmawt"/><path class="p2-28vwqt"/><path class="kdx2-qp7s"/><path class="pjpaztbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-broken"} {...others} />);
}

export default Component;
