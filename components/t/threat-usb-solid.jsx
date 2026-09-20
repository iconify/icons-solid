import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stxl60b4c.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="stxl60b4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:threat-usb-solid"} {...others} />);
}

export default Component;
