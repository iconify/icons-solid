import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz8vwp2ry.css';
import '../../css/y/y854psd3c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yz8vwp2ry"/><path class="y854psd3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gear-20-bold"} {...others} />);
}

export default Component;
