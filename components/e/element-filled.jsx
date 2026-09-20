import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-gw61byf.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="g-gw61byf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:element-filled"} {...others} />);
}

export default Component;
