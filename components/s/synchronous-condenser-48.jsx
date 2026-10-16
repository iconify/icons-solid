import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhd-y3l3p.css';
import '../../css/u/uconxdb5j.css';
import '../../css/k/kmsu02uqo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xhd-y3l3p"/><path class="uconxdb5j"/><path class="kmsu02uqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:synchronous-condenser-48"} {...others} />);
}

export default Component;
