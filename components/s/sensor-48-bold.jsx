import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0-az_5wc.css';
import '../../css/w/wwjl5kbxm.css';
import '../../css/c/c4-hwm4yw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r0-az_5wc"/><path class="wwjl5kbxm"/><path class="c4-hwm4yw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sensor-48-bold"} {...others} />);
}

export default Component;
