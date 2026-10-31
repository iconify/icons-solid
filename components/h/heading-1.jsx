import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xm135ubwj.css';
import '../../css/w/wkab_zovm.css';
import '../../css/a/am9q_ptrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="xm135ubwj"/><path class="wkab_zovm"/><path class="am9q_ptrr wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heading-1"} {...others} />);
}

export default Component;
