import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2dxeqb0n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a2dxeqb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:steering-user-filled"} {...others} />);
}

export default Component;
