import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu8c7vezn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yu8c7vezn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:user-management"} {...others} />);
}

export default Component;
