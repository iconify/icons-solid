import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tzkiesbng.css';
import '../../css/o/o6p41d9yz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tzkiesbng"/><circle class="o6p41d9yz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bounce-right"} {...others} />);
}

export default Component;
