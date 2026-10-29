import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kc9yk6tdg.css';
import '../../css/l/lr_5bibha.css';
import '../../css/x/x6z_-dbbd.css';
import '../../css/s/sgy7-3bgw.css';
import '../../css/r/r3rctnb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kc9yk6tdg"/><path class="lr_5bibha wm-k"/><path class="wm-a x6z_-dbbd"/><path class="sgy7-3bgw wm-k"/><path class="r3rctnb2q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:log-out-sketch"} {...others} />);
}

export default Component;
