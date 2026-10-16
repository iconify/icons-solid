import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsiiptbtu.css';
import '../../css/d/dm-cxkseg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qsiiptbtu"/><path class="dm-cxkseg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shopping-basket-48-bold"} {...others} />);
}

export default Component;
