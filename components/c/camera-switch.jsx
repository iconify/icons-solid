import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq5z-cv1s.css';

const viewBox = {"width":432,"height":408};
const content = `<path class="eq5z-cv1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:camera-switch"} {...others} />);
}

export default Component;
