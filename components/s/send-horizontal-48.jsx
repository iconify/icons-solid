import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrm4pgbwi.css';
import '../../css/v/vs6my9btk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wrm4pgbwi"/><path class="vs6my9btk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:send-horizontal-48"} {...others} />);
}

export default Component;
