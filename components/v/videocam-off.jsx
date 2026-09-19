import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex-4i4b2k.css';

const viewBox = {"width":408,"height":408};
const content = `<path class="ex-4i4b2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:videocam-off"} {...others} />);
}

export default Component;
