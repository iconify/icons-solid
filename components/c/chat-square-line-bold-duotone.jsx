import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfpn6w7ca.css';
import '../../css/o/o-74h_bnv.css';
import '../../css/a/az8lz0bfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfpn6w7ca"/><path class="o-74h_bnv"/><path class="az8lz0bfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-line-bold-duotone"} {...others} />);
}

export default Component;
