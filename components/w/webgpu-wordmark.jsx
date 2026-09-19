import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hshx60-si.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hshx60-si"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:webgpu-wordmark"} {...others} />);
}

export default Component;
