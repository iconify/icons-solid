import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j9ab-lb9c.css';
import '../../css/v/vkqvckkjf.css';
import '../../css/t/t9ojhbb3c.css';
import '../../css/v/v7_xde7np.css';
import '../../css/o/o1sikoqan.css';
import '../../css/e/e2avbabjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j9ab-lb9c wm-shadow"/><path class="vkqvckkjf"/><path class="t9ojhbb3c"/><path class="v7_xde7np"/><path class="o1sikoqan"/><path class="e2avbabjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:passport"} {...others} />);
}

export default Component;
