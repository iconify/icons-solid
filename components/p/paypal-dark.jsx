import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l48yp7bmv.css';
import '../../css/t/tmnz0vbmc.css';
import '../../css/r/r4qkfrbth.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l48yp7bmv"/><path class="tmnz0vbmc"/><path class="r4qkfrbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:paypal-dark"} {...others} />);
}

export default Component;
