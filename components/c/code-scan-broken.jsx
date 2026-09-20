import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s51xvubsa.css';
import '../../css/z/zzt2l_1lq.css';
import '../../css/z/zt8whupkf.css';
import '../../css/e/e-gdjo13i.css';
import '../../css/s/sthj-0bog.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/x/x3xpl4gpw.css';
import '../../css/r/ros5bvrws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s51xvubsa"/><path class="zzt2l_1lq"/><path class="zt8whupkf"/><path class="e-gdjo13i"/><path class="sthj-0bog"/><path class="x-1lf64uh"/><path class="x3xpl4gpw"/><path class="ros5bvrws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-scan-broken"} {...others} />);
}

export default Component;
