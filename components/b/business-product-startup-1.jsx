import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn8-qiy_o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rn8-qiy_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-product-startup-1"} {...others} />);
}

export default Component;
