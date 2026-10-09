import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwehzwmcr.css';
import '../../css/i/idt7ziwvh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vwehzwmcr"/><path class="idt7ziwvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compliance-20-bold"} {...others} />);
}

export default Component;
