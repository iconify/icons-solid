import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxlk8fdpd.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="qxlk8fdpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:phone-mode-airplane-server-plane-airplane-disable-wireless-mode-internet-network"} {...others} />);
}

export default Component;
