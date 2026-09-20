import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0c8k3y3j.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="s0c8k3y3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:align-horizontal"} {...others} />);
}

export default Component;
