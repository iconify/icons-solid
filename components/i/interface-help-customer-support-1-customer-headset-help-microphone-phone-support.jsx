import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjm12_boi.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="sjm12_boi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-help-customer-support-1-customer-headset-help-microphone-phone-support"} {...others} />);
}

export default Component;
