import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6dnwhibh.css';
import '../../css/s/s1ktrc_2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6dnwhibh"/><path class="s1ktrc_2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:usb-filled"} {...others} />);
}

export default Component;
