import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yf3u06bgo.css';
import '../../css/w/w23_2bcgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yf3u06bgo"/><path class="w23_2bcgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-done-01"} {...others} />);
}

export default Component;
