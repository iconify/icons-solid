import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s92pyt6_n.css';
import '../../css/h/h05r0heco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s92pyt6_n"/><path class="h05r0heco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gemini"} {...others} />);
}

export default Component;
