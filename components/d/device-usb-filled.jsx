import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqs2x_bug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqs2x_bug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-usb-filled"} {...others} />);
}

export default Component;
