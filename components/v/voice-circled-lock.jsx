import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w1_yo30pq.css';
import '../../css/h/hhj58fbib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w1_yo30pq"/><path class="hhj58fbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:voice-circled-lock"} {...others} />);
}

export default Component;
