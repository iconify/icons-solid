import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ig2fy1bhu.css';
import '../../css/j/j0gd-ogjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ig2fy1bhu"/><path class="j0gd-ogjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cake"} {...others} />);
}

export default Component;
