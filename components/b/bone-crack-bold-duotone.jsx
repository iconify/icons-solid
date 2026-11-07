import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw-m5ubxc.css';
import '../../css/d/dn1u2whmb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zw-m5ubxc"/><path class="dn1u2whmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-crack-bold-duotone"} {...others} />);
}

export default Component;
