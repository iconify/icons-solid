import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cvw1sgbmg.css';
import '../../css/t/t6g099cob.css';
import '../../css/c/calastbeo.css';
import '../../css/o/oinz63b_i.css';
import '../../css/o/onxwq4bzx.css';
import '../../css/g/g2e755bto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cvw1sgbmg wm-shadow"/><path class="t6g099cob"/><path class="calastbeo"/><path class="oinz63b_i"/><path class="onxwq4bzx"/><path class="g2e755bto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:switch-camera"} {...others} />);
}

export default Component;
