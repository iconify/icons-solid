import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlzn5acfz.css';
import '../../css/k/k4ib_nbps.css';
import '../../css/a/a50yp5blw.css';
import '../../css/q/q7o47tals.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGKpfBmbbD" x1="-17.537" x2="518.844" y1="167.598" y2="311.321" gradientUnits="userSpaceOnUse"><stop offset="0" class="wlzn5acfz"/><stop offset=".893" class="k4ib_nbps"/><stop offset="1" class="a50yp5blw"/></linearGradient><path fill="url(#SVGKpfBmbbD)" class="q7o47tals"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crosswatch"} {...others} />);
}

export default Component;
