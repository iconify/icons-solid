import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac9x35hjm.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="ac9x35hjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:axis-rotation"} {...others} />);
}

export default Component;
