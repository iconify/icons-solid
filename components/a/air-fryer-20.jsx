import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7yzfib3b.css';
import '../../css/v/vwz64_bea.css';
import '../../css/s/srjhv05-x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v7yzfib3b"/><path class="vwz64_bea"/><path class="srjhv05-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-fryer-20"} {...others} />);
}

export default Component;
