import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pjxp7fouu.css';
import '../../css/q/qkf5pcc0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pjxp7fouu"/><path class="qkf5pcc0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:chat-bubble-translate"} {...others} />);
}

export default Component;
