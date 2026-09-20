import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-x-omb7i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="t-x-omb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:usb-drive-remix"} {...others} />);
}

export default Component;
