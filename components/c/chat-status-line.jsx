import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wa5y1pppq.css';
import '../../css/p/pv46_kizc.css';
import '../../css/j/jxl67pbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wa5y1pppq"/><path class="pv46_kizc"/><circle class="jxl67pbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:chat-status-line"} {...others} />);
}

export default Component;
