import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgrtu-b6i.css';
import '../../css/y/yft263tla.css';
import '../../css/i/iqd64138m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qgrtu-b6i"/><path class="yft263tla"/><path class="iqd64138m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hammock-48"} {...others} />);
}

export default Component;
