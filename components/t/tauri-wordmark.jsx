import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqqvt6lnb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hqqvt6lnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:tauri-wordmark"} {...others} />);
}

export default Component;
