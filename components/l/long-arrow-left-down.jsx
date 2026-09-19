import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vkf8dibku.css';
import '../../css/r/r3d5akbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vkf8dibku"/><path class="r3d5akbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:long-arrow-left-down"} {...others} />);
}

export default Component;
