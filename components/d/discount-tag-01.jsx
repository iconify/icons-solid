import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ewh2-wbnp.css';
import '../../css/u/uydlmxbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ewh2-wbnp"/><path class="uydlmxbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:discount-tag-01"} {...others} />);
}

export default Component;
