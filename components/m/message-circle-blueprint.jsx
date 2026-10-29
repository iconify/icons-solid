import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z39zkobfw.css';
import '../../css/n/nfmhgjb_q.css';
import '../../css/j/jl_5gh53q.css';
import '../../css/m/md_gb3brr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco z39zkobfw"/><path class="nfmhgjb_q wm-k"/><path class="jl_5gh53q wm-a"/><path class="md_gb3brr wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-circle-blueprint"} {...others} />);
}

export default Component;
