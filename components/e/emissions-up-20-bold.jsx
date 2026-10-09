import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onux0z-vm.css';
import '../../css/q/qeqgxacwk.css';
import '../../css/l/l4v5cqb8b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="onux0z-vm"/><path class="qeqgxacwk"/><path class="l4v5cqb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emissions-up-20-bold"} {...others} />);
}

export default Component;
