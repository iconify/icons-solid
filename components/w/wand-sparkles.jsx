import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wyfebegqp.css';
import '../../css/q/q73-lebvq.css';
import '../../css/d/d1y700bwp.css';
import '../../css/b/bue_v_rra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wyfebegqp"/><path class="q73-lebvq"/><path class="d1y700bwp"/><path class="bue_v_rra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wand-sparkles"} {...others} />);
}

export default Component;
