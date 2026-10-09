import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtf397bse.css';
import '../../css/x/xyb5vubsu.css';
import '../../css/w/wwtxgkniu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dtf397bse"/><path class="xyb5vubsu"/><path class="wwtxgkniu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lamp-48-bold"} {...others} />);
}

export default Component;
