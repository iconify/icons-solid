import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dxplmnb3y.css';
import '../../css/x/xn4zvpbmt.css';
import '../../css/p/pyeja5bvq.css';
import '../../css/x/xj93a5bgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dxplmnb3y"/><path class="xn4zvpbmt"/><path class="pyeja5bvq"/><path class="xj93a5bgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-2-broken"} {...others} />);
}

export default Component;
