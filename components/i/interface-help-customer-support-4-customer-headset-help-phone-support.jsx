import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drhte3_lk.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="drhte3_lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-help-customer-support-4-customer-headset-help-phone-support"} {...others} />);
}

export default Component;
