import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2_zy01_l.css';
import '../../css/u/uvhzmp04b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r2_zy01_l"/><path class="uvhzmp04b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-bus-20"} {...others} />);
}

export default Component;
