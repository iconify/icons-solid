import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/y/y6mlhmbcp.css';
import '../../css/r/r0p-ejt9x.css';
import '../../css/l/lt36robqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="y6mlhmbcp"/><path class="r0p-ejt9x"/><path class="lt36robqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-check-linear"} {...others} />);
}

export default Component;
