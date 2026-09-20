import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbn03r-oh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zbn03r-oh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-battery-low-1-phone-mobile-charge-device-electricity-power-battery-low"} {...others} />);
}

export default Component;
