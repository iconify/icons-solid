import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s47otfb_x.css';
import '../../css/e/e7ugy10kt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s47otfb_x"/><path class="e7ugy10kt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-range"} {...others} />);
}

export default Component;
