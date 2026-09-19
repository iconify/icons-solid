import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q0l7_4b9y.css';
import '../../css/e/e7n46g91q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q0l7_4b9y"/><path class="e7n46g91q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-download-01"} {...others} />);
}

export default Component;
