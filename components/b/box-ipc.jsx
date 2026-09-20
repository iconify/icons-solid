import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjo5o7goe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tjo5o7goe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:box-ipc"} {...others} />);
}

export default Component;
