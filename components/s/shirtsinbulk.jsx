import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_s9djx_l.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="r_s9djx_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:shirtsinbulk"} {...others} />);
}

export default Component;
