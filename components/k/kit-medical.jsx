import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh0i0ccvh.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="dh0i0ccvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:kit-medical"} {...others} />);
}

export default Component;
