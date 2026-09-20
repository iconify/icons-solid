import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk4rufb6h.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="nk4rufb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:battery-upright-xmark"} {...others} />);
}

export default Component;
