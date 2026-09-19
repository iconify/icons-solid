import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y4yrbjb0s.css';
import '../../css/c/c53acdcbc.css';
import '../../css/w/wuv665bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y4yrbjb0s"/><path class="c53acdcbc"/><path class="wuv665bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pepper"} {...others} />);
}

export default Component;
