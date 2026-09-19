import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8sacuuou.css';
import '../../css/y/yusbh7bbp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v8sacuuou"/><path class="yusbh7bbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-paypal"} {...others} />);
}

export default Component;
