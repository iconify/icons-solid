import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpi-wl9og.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vpi-wl9og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:volume-mute-filled"} {...others} />);
}

export default Component;
