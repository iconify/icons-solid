import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eypl85bpr.css';
import '../../css/i/itek6q5-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eypl85bpr"/><path class="itek6q5-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clipboard-minus"} {...others} />);
}

export default Component;
