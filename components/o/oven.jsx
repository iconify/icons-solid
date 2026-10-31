import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cd0of_yts.css';
import '../../css/j/jotgyuazg.css';
import '../../css/a/amd7rcb1w.css';
import '../../css/e/ezxbsht8s.css';
import '../../css/c/crq8a1r_w.css';
import '../../css/p/prbh1rs8c.css';
import '../../css/s/smg7sbbqc.css';
import '../../css/g/g6rifwb1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cd0of_yts wm-k"/><path class="jotgyuazg wm-s"/><path class="amd7rcb1w wm-k"/><path class="ezxbsht8s wm-k"/><path class="crq8a1r_w wm-s"/><path class="prbh1rs8c wm-shadow"/><path class="smg7sbbqc wm-shine"/><path class="g6rifwb1r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:oven"} {...others} />);
}

export default Component;
