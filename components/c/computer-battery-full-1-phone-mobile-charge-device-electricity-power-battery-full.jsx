import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snt7ubc3n.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="snt7ubc3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-battery-full-1-phone-mobile-charge-device-electricity-power-battery-full"} {...others} />);
}

export default Component;
