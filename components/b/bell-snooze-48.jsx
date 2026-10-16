import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hosli1blv.css';
import '../../css/u/uoh_r3_bx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hosli1blv"/><path class="uoh_r3_bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-snooze-48"} {...others} />);
}

export default Component;
