import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y_9pgz92i.css';
import '../../css/t/t-kg0f6ji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y_9pgz92i"/><path class="t-kg0f6ji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:corner-up-left"} {...others} />);
}

export default Component;
