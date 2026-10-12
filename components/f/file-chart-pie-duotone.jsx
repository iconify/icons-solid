import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kewlx_8_q.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/n/nsvckbl7j.css';
import '../../css/j/j-2ozbcdp.css';
import '../../css/t/tudmxnbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kewlx_8_q"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="nsvckbl7j"/><path class="j-2ozbcdp"/><path class="tudmxnbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-chart-pie-duotone"} {...others} />);
}

export default Component;
