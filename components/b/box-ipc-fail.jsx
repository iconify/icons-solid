import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4zn-mv5y.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="t4zn-mv5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:box-ipc-fail"} {...others} />);
}

export default Component;
