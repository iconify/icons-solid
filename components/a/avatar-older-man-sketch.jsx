import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jtajxgb4n.css';
import '../../css/a/azal3rqdu.css';
import '../../css/s/si6j45b4s.css';
import '../../css/z/zmlmm24uq.css';
import '../../css/x/x1zm6fmqu.css';
import '../../css/o/o-czogb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jtajxgb4n wm-k"/><path class="azal3rqdu wm-k"/><path class="si6j45b4s wm-k"/><path class="wm-a zmlmm24uq"/><path class="wm-s x1zm6fmqu"/><path class="o-czogb1w wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-older-man-sketch"} {...others} />);
}

export default Component;
