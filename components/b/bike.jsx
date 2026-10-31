import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wqcqzbc1t.css';
import '../../css/d/du3q49l5d.css';
import '../../css/f/ftrl-3bps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wqcqzbc1t"/><path class="du3q49l5d"/><path class="ftrl-3bps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bike"} {...others} />);
}

export default Component;
