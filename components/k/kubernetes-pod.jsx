import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsrzeq-ig.css';
import '../../css/u/um_le5b4k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hsrzeq-ig"/><path class="um_le5b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:kubernetes-pod"} {...others} />);
}

export default Component;
