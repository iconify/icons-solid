import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d5a41rsod.css';
import '../../css/z/zzt2l_1lq.css';
import '../../css/z/zt8whupkf.css';
import '../../css/a/a03ay8oha.css';
import '../../css/i/i8utatbio.css';
import '../../css/v/vepd3ytoq.css';
import '../../css/u/un-u7xpwr.css';
import '../../css/q/qpmqs1x2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d5a41rsod"/><path class="zzt2l_1lq"/><path class="zt8whupkf"/><path class="a03ay8oha"/><path class="i8utatbio"/><path class="vepd3ytoq"/><path class="un-u7xpwr"/><path class="qpmqs1x2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-scan-line-duotone"} {...others} />);
}

export default Component;
