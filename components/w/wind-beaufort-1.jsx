import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlk5ymyap.css';
import '../../css/i/i27tkhlqe.css';
import '../../css/z/zchpsq1vr.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><symbol id="SVGPBANGc5F" viewBox="0 0 342 234"><path class="vlk5ymyap"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1480"/></path><path class="i27tkhlqe"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 440"/></path></symbol></defs><use width="342" height="234" href="#SVGPBANGc5F" transform="translate(85 139)"/><path class="zchpsq1vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:wind-beaufort-1"} {...others} />);
}

export default Component;
