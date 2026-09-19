import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg_r1w5zy.css';
import '../../css/h/hl1483cic.css';
import '../../css/e/ejyojtvpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sg_r1w5zy"/><path class="hl1483cic"/><path clip-rule="evenodd" class="ejyojtvpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-schedule-school-date-time"} {...others} />);
}

export default Component;
