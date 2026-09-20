import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/ptmjsvbcs.css';
import '../../css/b/bf_awlqyp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ptmjsvbcs"/><path class="bf_awlqyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:check-square-one"} {...others} />);
}

export default Component;
