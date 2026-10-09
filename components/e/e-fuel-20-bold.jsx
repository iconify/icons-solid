import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll4p3cbte.css';
import '../../css/m/m4t5o-y0h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ll4p3cbte"/><path class="m4t5o-y0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-fuel-20-bold"} {...others} />);
}

export default Component;
