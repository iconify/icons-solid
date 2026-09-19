import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvy7q9nnj.css';
import '../../css/f/f86xz6sdl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nvy7q9nnj"/><path class="f86xz6sdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-pak-multicloud-mgmt"} {...others} />);
}

export default Component;
