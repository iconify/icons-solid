import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bzgl5mbjj.css';
import '../../css/c/cnqgj_7ld.css';
import '../../css/s/sn07vob-o.css';
import '../../css/d/dfu4xbo5x.css';
import '../../css/f/f6q-rwbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bzgl5mbjj"/><path class="cnqgj_7ld"/><path class="sn07vob-o"/><path class="dfu4xbo5x"/><path class="f6q-rwbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-man-cap"} {...others} />);
}

export default Component;
