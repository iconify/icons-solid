import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lsl57wb9l.css';
import '../../css/x/xlnsm5brw.css';
import '../../css/u/uxv1v2b5s.css';
import '../../css/v/vo6opbbcj.css';
import '../../css/d/dr_fvrbnk.css';
import '../../css/v/v826tbcka.css';
import '../../css/v/v7oxsddra.css';
import '../../css/p/prthrmbng.css';
import '../../css/y/ym55n8biq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lsl57wb9l"/><path class="wm-a xlnsm5brw"/><path class="uxv1v2b5s"/><path class="vo6opbbcj wm-s"/><path class="dr_fvrbnk wm-s"/><path class="v826tbcka wm-s"/><path class="v7oxsddra wm-s"/><path class="prthrmbng"/><path class="wm-a ym55n8biq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mistletoe-duo"} {...others} />);
}

export default Component;
