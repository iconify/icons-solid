import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcad-6s8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kcad-6s8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:usb-outline"} {...others} />);
}

export default Component;
