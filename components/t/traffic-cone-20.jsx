import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chylptbbp.css';
import '../../css/l/lu03jdbhp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="chylptbbp"/><path class="lu03jdbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:traffic-cone-20"} {...others} />);
}

export default Component;
