import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plzz2p7cj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="plzz2p7cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:usb-x"} {...others} />);
}

export default Component;
