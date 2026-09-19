import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q4bf14bkq.css';
import '../../css/t/t5luc1mev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q4bf14bkq"/><path class="t5luc1mev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-brain-03"} {...others} />);
}

export default Component;
