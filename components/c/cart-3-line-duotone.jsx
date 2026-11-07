import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wdhm326bq.css';
import '../../css/a/ahcwsvb2k.css';
import '../../css/l/lgdpnsvji.css';
import '../../css/y/yqmotfmyy.css';
import '../../css/b/b1nxqifcp.css';
import '../../css/z/zy4x83b9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wdhm326bq"/><path class="ahcwsvb2k"/><path class="lgdpnsvji"/><path class="yqmotfmyy"/><path class="b1nxqifcp"/><path class="zy4x83b9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-3-line-duotone"} {...others} />);
}

export default Component;
