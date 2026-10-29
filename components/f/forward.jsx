import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eny4o1qim.css';
import '../../css/t/tcs_i6beh.css';
import '../../css/o/o6siwe3ae.css';
import '../../css/v/vmfuu_x8b.css';
import '../../css/o/odaqanbpm.css';
import '../../css/n/nxguj4cxl.css';
import '../../css/n/n-lritb0l.css';
import '../../css/d/dg3bjtahe.css';
import '../../css/o/okbpbmbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eny4o1qim wm-shadow"/><path class="tcs_i6beh wm-shadow"/><path class="o6siwe3ae"/><path class="vmfuu_x8b"/><path class="odaqanbpm"/><path class="nxguj4cxl"/><path class="n-lritb0l wm-shine"/><path class="dg3bjtahe wm-shine"/><path class="okbpbmbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:forward"} {...others} />);
}

export default Component;
