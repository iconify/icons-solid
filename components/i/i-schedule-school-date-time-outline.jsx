import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srqj-b-6a.css';
import '../../css/q/qncv2452o.css';
import '../../css/b/b6_5vzbye.css';
import '../../css/u/u8g062bad.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="srqj-b-6a"/><path class="qncv2452o"/><path clip-rule="evenodd" class="b6_5vzbye"/><path class="u8g062bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-schedule-school-date-time-outline"} {...others} />);
}

export default Component;
