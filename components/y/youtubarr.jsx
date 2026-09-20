import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq88usbhz.css';
import '../../css/i/i48zahbzg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gq88usbhz"/><path class="i48zahbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:youtubarr"} {...others} />);
}

export default Component;
