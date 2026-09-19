import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjf-9dgth.css';
import '../../css/o/oynaqv73q.css';
import '../../css/q/qucgv_owo.css';
import '../../css/w/wq6my-d3i.css';
import '../../css/n/n3f660bqr.css';
import '../../css/o/ofx6dntsa.css';
import '../../css/r/reni1qbmp.css';
import '../../css/m/mwpzg6bcn.css';
import '../../css/s/sjfgw9vtc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 fjf-9dgth"/><path class="clr-i-outline clr-i-outline-path-2 oynaqv73q"/><path class="clr-i-outline clr-i-outline-path-3 qucgv_owo"/><path class="clr-i-outline clr-i-outline-path-4 wq6my-d3i"/><path class="clr-i-outline clr-i-outline-path-5 n3f660bqr"/><path class="clr-i-outline clr-i-outline-path-6 ofx6dntsa"/><path class="clr-i-outline clr-i-outline-path-7 reni1qbmp"/><path class="clr-i-outline clr-i-outline-path-8 mwpzg6bcn"/><path class="clr-i-outline clr-i-outline-path-9 sjfgw9vtc"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:sun-line"} {...others} />);
}

export default Component;
