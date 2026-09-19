import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuzo8w5dz.css';

const viewBox = {"width":360,"height":384};
const content = `<path class="wuzo8w5dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:paypal-alt"} {...others} />);
}

export default Component;
