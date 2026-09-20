import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/boxufibmx.css';
import '../../css/x/xn4zvpbmt.css';
import '../../css/p/pyeja5bvq.css';
import '../../css/d/dxplmnb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="boxufibmx"/><path class="xn4zvpbmt"/><path class="pyeja5bvq"/><path class="dxplmnb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-2-linear"} {...others} />);
}

export default Component;
