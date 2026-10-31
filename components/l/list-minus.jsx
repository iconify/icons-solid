import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/le4_hrb6o.css';
import '../../css/i/i18r14osf.css';
import '../../css/r/rrzhgezff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="le4_hrb6o"/><path class="i18r14osf"/><path class="rrzhgezff wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:list-minus"} {...others} />);
}

export default Component;
