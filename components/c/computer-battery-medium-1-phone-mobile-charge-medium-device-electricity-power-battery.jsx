import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/herkd2ykw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="herkd2ykw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-battery-medium-1-phone-mobile-charge-medium-device-electricity-power-battery"} {...others} />);
}

export default Component;
