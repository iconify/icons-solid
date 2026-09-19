import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miy_awb1i.css';

const viewBox = {"width":616,"height":512};
const content = `<path class="miy_awb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:cloudversify"} {...others} />);
}

export default Component;
