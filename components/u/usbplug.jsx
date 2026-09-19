import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csg4-9uxp.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="csg4-9uxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:usbplug"} {...others} />);
}

export default Component;
