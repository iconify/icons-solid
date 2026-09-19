import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u1eji1rmw.css';
import '../../css/a/axs_k1h2z.css';
import '../../css/r/r1c57no2i.css';
import '../../css/d/dpjxqjbxh.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsIScheduleSchoolDateTimeNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="u1eji1rmw"/><path class="axs_k1h2z"/><path clip-rule="evenodd" class="r1c57no2i"/><path clip-rule="evenodd" class="dpjxqjbxh"/></g><defs><clipPath id="healthiconsIScheduleSchoolDateTimeNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-schedule-school-date-time-negative"} {...others} />);
}

export default Component;
