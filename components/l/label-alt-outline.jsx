import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8bblxhcr.css';

const viewBox = {"width":408,"height":384};
const content = `<path class="w8bblxhcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:label-alt-outline"} {...others} />);
}

export default Component;
