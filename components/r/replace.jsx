import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kszlm5b1i.css';
import '../../css/i/iu0urbcsj.css';
import '../../css/l/l4-9yms_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kszlm5b1i wm-shadow"/><path class="iu0urbcsj"/><path class="l4-9yms_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:replace"} {...others} />);
}

export default Component;
