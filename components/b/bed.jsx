import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zjj8ytbtl.css';
import '../../css/d/dqialcc1p.css';
import '../../css/u/ug-xyjbav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zjj8ytbtl"/><path class="dqialcc1p"/><path class="ug-xyjbav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bed"} {...others} />);
}

export default Component;
