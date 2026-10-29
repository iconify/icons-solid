import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/holidngbb.css';
import '../../css/a/azqmc2bkv.css';
import '../../css/r/r6we66bvg.css';
import '../../css/t/t5foyebrh.css';
import '../../css/w/wa4w_3bpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="holidngbb wm-k"/><path class="azqmc2bkv wm-k"/><path class="r6we66bvg wm-k"/><path class="t5foyebrh wm-a"/><path class="wa4w_3bpb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-cursor-input-sketch"} {...others} />);
}

export default Component;
