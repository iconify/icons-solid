import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh19p7bko.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="zh19p7bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:project-settings"} {...others} />);
}

export default Component;
