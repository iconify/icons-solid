import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhr_7cy8v.css';
import '../../css/j/j-pcb1b_h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bhr_7cy8v"/><path class="j-pcb1b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tab-key-20-bold"} {...others} />);
}

export default Component;
