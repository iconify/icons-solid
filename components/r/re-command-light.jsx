import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/k/krzr9662y.css';
import '../../css/s/sbrlsg32p.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGqa3OAe1v" x1="-695.575" x2="-519.089" y1="422.325" y2="327.556" gradientTransform="rotate(105 1263.193 108.382)scale(-2.8347 2.8347)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="pnjr8_b7e"/></linearGradient><path fill="url(#SVGqa3OAe1v)" class="krzr9662y"/><path class="sbrlsg32p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:re-command-light"} {...others} />);
}

export default Component;
