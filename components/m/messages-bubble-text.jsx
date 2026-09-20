import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ewf489byd.css';
import '../../css/y/yvt-5hbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ewf489byd"/><path class="yvt-5hbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-bubble-text"} {...others} />);
}

export default Component;
