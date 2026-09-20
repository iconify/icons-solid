import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn0zbtb1x.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="xn0zbtb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cellular-network-5g-solid"} {...others} />);
}

export default Component;
