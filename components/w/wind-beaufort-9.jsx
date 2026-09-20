import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlk5ymyap.css';
import '../../css/i/i27tkhlqe.css';
import '../../css/q/q53lblcmn.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><symbol id="SVGMH96JcHm" viewBox="0 0 342 234"><path class="vlk5ymyap"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 3848"/></path><path class="i27tkhlqe"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2200"/></path></symbol></defs><use width="342" height="234" href="#SVGMH96JcHm" transform="translate(85 139)"/><path class="q53lblcmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:wind-beaufort-9"} {...others} />);
}

export default Component;
