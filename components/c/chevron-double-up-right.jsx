import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p_ts73zld.css';
import '../../css/k/kf_68ccoe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p_ts73zld"/><path class="kf_68ccoe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevron-double-up-right"} {...others} />);
}

export default Component;
