import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mxhh8kdvi.css';
import '../../css/y/yb0pd8rdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mxhh8kdvi"/><path class="yb0pd8rdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:calendar-arrow-up"} {...others} />);
}

export default Component;
