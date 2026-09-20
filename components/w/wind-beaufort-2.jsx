import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlk5ymyap.css';
import '../../css/i/i27tkhlqe.css';
import '../../css/i/ihec48y4v.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><symbol id="SVGYq2k3YVN" viewBox="0 0 342 234"><path class="vlk5ymyap"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1776"/></path><path class="i27tkhlqe"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 660"/></path></symbol></defs><use width="342" height="234" href="#SVGYq2k3YVN" transform="translate(85 139)"/><path class="ihec48y4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:wind-beaufort-2"} {...others} />);
}

export default Component;
