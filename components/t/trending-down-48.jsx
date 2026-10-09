import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqwmttb_b.css';
import '../../css/r/r_ehnoaxt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wqwmttb_b"/><path class="r_ehnoaxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trending-down-48"} {...others} />);
}

export default Component;
