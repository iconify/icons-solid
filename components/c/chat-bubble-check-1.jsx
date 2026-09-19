import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oakblnbre.css';
import '../../css/p/pjxp7fouu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oakblnbre"/><path class="pjxp7fouu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:chat-bubble-check-1"} {...others} />);
}

export default Component;
