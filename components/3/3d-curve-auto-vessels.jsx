import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxjnpbb5e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sxjnpbb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:3d-curve-auto-vessels"} {...others} />);
}

export default Component;
