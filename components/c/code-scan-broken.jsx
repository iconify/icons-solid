import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hsw_rr3hs.css';
import '../../css/o/oy2x2cc4m.css';
import '../../css/x/xyqjphqzo.css';
import '../../css/e/e-gdjo13i.css';
import '../../css/j/j6-r-u5ao.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/x/x3xpl4gpw.css';
import '../../css/r/ros5bvrws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hsw_rr3hs"/><path class="oy2x2cc4m"/><path class="xyqjphqzo"/><path class="e-gdjo13i"/><path class="j6-r-u5ao"/><path class="x-1lf64uh"/><path class="x3xpl4gpw"/><path class="ros5bvrws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-scan-broken"} {...others} />);
}

export default Component;
