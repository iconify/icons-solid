import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r1-6m6bmt.css';
import '../../css/j/jsrth9b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r1-6m6bmt"/><path class="jsrth9b3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dress-06"} {...others} />);
}

export default Component;
