import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e51_17bqm.css';
import '../../css/y/y971-sbup.css';
import '../../css/s/smlm6-8mf.css';
import '../../css/k/kcbeidzug.css';
import '../../css/t/t_jrdsb4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e51_17bqm wm-k"/><path class="wm-a y971-sbup"/><path class="smlm6-8mf wm-shadow"/><path class="kcbeidzug wm-k"/><path class="t_jrdsb4n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pipette-engrave"} {...others} />);
}

export default Component;
