import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp3f52brw.css';
import '../../css/s/sh_ep79bw.css';
import '../../css/n/nvgxfpbnc.css';
import '../../css/v/vliabebqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lp3f52brw"/><path class="sh_ep79bw"/><path class="nvgxfpbnc"/><path class="vliabebqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-sleep"} {...others} />);
}

export default Component;
