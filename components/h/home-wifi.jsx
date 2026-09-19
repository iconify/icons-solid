import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h6e57hbmh.css';
import '../../css/w/w12s6pbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h6e57hbmh"/><path class="w12s6pbwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:home-wifi"} {...others} />);
}

export default Component;
