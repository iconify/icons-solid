import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjf1anbpn.css';

const viewBox = {"width":432,"height":424};
const content = `<path class="kjf1anbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:portable-wifi-off"} {...others} />);
}

export default Component;
