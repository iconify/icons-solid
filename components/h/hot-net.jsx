import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5wl3gvdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5wl3gvdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:hot-net"} {...others} />);
}

export default Component;
