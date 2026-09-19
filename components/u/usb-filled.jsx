import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzm9y0mnu.css';
import '../../css/n/nxx7kub6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rzm9y0mnu"/><path clip-rule="evenodd" class="nxx7kub6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:usb-filled"} {...others} />);
}

export default Component;
