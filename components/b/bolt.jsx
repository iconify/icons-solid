import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q4ajtdfwy.css';
import '../../css/k/khff3selz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q4ajtdfwy"/><path class="khff3selz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bolt"} {...others} />);
}

export default Component;
