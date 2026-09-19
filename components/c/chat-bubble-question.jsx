import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rh6jcruqe.css';
import '../../css/p/pjxp7fouu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rh6jcruqe"/><path class="pjxp7fouu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:chat-bubble-question"} {...others} />);
}

export default Component;
