import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix1cghcpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ix1cghcpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:forward-off-outline"} {...others} />);
}

export default Component;
