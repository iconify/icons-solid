import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo1eldb9g.css';
import '../../css/e/e26qy--yc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fo1eldb9g"/><path class="e26qy--yc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-inverter-20"} {...others} />);
}

export default Component;
