import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rqfbr__fl.css';
import '../../css/q/q5-dhc8gp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rqfbr__fl"/><path class="q5-dhc8gp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-download-01"} {...others} />);
}

export default Component;
