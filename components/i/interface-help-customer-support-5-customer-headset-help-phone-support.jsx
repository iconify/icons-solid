import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gv35bhbkz.css';
import '../../css/o/o8ap-ybke.css';
import '../../css/r/rwhb6ox2w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="gv35bhbkz"/><rect class="o8ap-ybke"/><path class="rwhb6ox2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-help-customer-support-5-customer-headset-help-phone-support"} {...others} />);
}

export default Component;
