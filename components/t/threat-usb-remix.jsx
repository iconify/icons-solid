import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mind97vlq.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mind97vlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:threat-usb-remix"} {...others} />);
}

export default Component;
