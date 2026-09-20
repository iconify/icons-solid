import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfgv5d9ci.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rfgv5d9ci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:camera"} {...others} />);
}

export default Component;
