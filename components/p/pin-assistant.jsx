import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d96z9pegl.css';

const viewBox = {"width":384,"height":456};
const content = `<path class="d96z9pegl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:pin-assistant"} {...others} />);
}

export default Component;
