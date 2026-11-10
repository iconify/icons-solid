import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxc5jkdys.css';
import '../../css/e/erprbzwkx.css';
import '../../css/s/swjd-ctvi.css';
import '../../css/i/ihxq05bkx.css';
import '../../css/z/zrfz1ibxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="dxc5jkdys"/><circle class="erprbzwkx"/><path class="swjd-ctvi"/><path class="ihxq05bkx"/><path class="zrfz1ibxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:timeline-annotations"} {...others} />);
}

export default Component;
