import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d5a41rsod.css';
import '../../css/z/zzt2l_1lq.css';
import '../../css/z/zt8whupkf.css';
import '../../css/a/a03ay8oha.css';
import '../../css/e/ercgknd1i.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/p/p79yqm6ra.css';
import '../../css/r/ros5bvrws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d5a41rsod"/><path class="zzt2l_1lq"/><path class="zt8whupkf"/><path class="a03ay8oha"/><path class="ercgknd1i"/><path class="x-1lf64uh"/><path class="p79yqm6ra"/><path class="ros5bvrws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-scan-linear"} {...others} />);
}

export default Component;
