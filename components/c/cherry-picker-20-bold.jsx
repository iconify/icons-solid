import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k__-9jb3z.css';
import '../../css/e/eflquttdn.css';
import '../../css/x/x2yw4q15w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k__-9jb3z"/><path class="eflquttdn"/><path class="x2yw4q15w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cherry-picker-20-bold"} {...others} />);
}

export default Component;
