import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tae4rbc7m.css';
import '../../css/m/mpxziygee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tae4rbc7m"/><path class="mpxziygee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:wifi"} {...others} />);
}

export default Component;
