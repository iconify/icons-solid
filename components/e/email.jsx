import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msel8rbya.css';
import '../../css/z/zt3trxb6e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="msel8rbya"/><path class="zt3trxb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:email"} {...others} />);
}

export default Component;
