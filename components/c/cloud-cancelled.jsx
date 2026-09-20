import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh5ytpbvo.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="rh5ytpbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:cloud-cancelled"} {...others} />);
}

export default Component;
