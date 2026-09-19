import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/khff3selz.css';
import '../../css/g/gwugs5bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="khff3selz"/><path class="gwugs5bdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:iconoir"} {...others} />);
}

export default Component;
