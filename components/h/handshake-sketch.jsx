import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t3fmph07q.css';
import '../../css/z/zed8uz8yd.css';
import '../../css/e/exdiltbqb.css';
import '../../css/r/rjtu802pw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t3fmph07q wm-k"/><path class="wm-a zed8uz8yd"/><path class="exdiltbqb wm-k"/><path class="rjtu802pw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:handshake-sketch"} {...others} />);
}

export default Component;
