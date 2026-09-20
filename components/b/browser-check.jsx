import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sxm22-bpx.css';
import '../../css/u/umiyufmzm.css';
import '../../css/w/w6-f7fbch.css';
import '../../css/i/iodcr_bpu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="sxm22-bpx"/><path class="umiyufmzm"/><path class="w6-f7fbch"/><path class="iodcr_bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:browser-check"} {...others} />);
}

export default Component;
