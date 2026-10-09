import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkuaw6bpa.css';
import '../../css/e/e1qe98bwh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rkuaw6bpa"/><path class="e1qe98bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-20-bold"} {...others} />);
}

export default Component;
