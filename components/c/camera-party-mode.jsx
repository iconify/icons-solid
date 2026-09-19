import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxgnpab1l.css';

const viewBox = {"width":432,"height":408};
const content = `<path class="pxgnpab1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:camera-party-mode"} {...others} />);
}

export default Component;
