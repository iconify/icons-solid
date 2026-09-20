import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rlsac7obx.css';
import '../../css/o/ow-__pceu.css';
import '../../css/n/nsfdoabrq.css';
import '../../css/m/mytsqsu7w.css';
import '../../css/r/rivq1nv_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rlsac7obx"/><path class="ow-__pceu"/><path class="nsfdoabrq"/><path class="mytsqsu7w"/><path class="rivq1nv_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-right-broken"} {...others} />);
}

export default Component;
