import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkcxx1bzb.css';
import '../../css/w/wo_d300qx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mkcxx1bzb"/><path class="wo_d300qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-warning-20"} {...others} />);
}

export default Component;
