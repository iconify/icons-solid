import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrw7eflsk.css';
import '../../css/x/xxyrztbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrw7eflsk"/><path class="xxyrztbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-up-right-stroke-circle"} {...others} />);
}

export default Component;
