import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vj49qk69z.css';
import '../../css/n/nq27wzbeg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vj49qk69z"/><path class="nq27wzbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:keyboard-20-bold"} {...others} />);
}

export default Component;
