import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6y08ddso.css';
import '../../css/q/qky_02hhd.css';
import '../../css/y/y7680abmt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j6y08ddso"/><path class="qky_02hhd"/><path class="y7680abmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-fault-48-bold"} {...others} />);
}

export default Component;
