import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypo4zjzwr.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="ypo4zjzwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:projects"} {...others} />);
}

export default Component;
