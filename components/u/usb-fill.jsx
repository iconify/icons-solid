import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne225fbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ne225fbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:usb-fill"} {...others} />);
}

export default Component;
