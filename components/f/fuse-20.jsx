import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8rpcmbtb.css';
import '../../css/q/qeaq1eplb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i8rpcmbtb"/><path class="qeaq1eplb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuse-20"} {...others} />);
}

export default Component;
