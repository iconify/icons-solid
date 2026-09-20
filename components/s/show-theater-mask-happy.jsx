import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fw07smx_x.css';
import '../../css/y/yix7axb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fw07smx_x"/><path class="yix7axb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:show-theater-mask-happy"} {...others} />);
}

export default Component;
