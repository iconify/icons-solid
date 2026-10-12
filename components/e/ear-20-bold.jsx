import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1xrsabpz.css';
import '../../css/u/ug018k_ll.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t1xrsabpz"/><path class="ug018k_ll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ear-20-bold"} {...others} />);
}

export default Component;
