import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cppjm0jfh.css';
import '../../css/m/mz0wy9bse.css';
import '../../css/w/wangxwr8d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cppjm0jfh"/><path class="mz0wy9bse"/><path class="wangxwr8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-wrench-48"} {...others} />);
}

export default Component;
