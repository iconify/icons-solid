import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w99w8acpr.css';
import '../../css/s/s-p6onbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w99w8acpr"/><path class="s-p6onbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-security-01"} {...others} />);
}

export default Component;
