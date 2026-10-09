import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbu-t6btd.css';
import '../../css/w/wou0m8doy.css';
import '../../css/j/jaje2urvr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kbu-t6btd"/><path class="wou0m8doy"/><path class="jaje2urvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-square-48-bold"} {...others} />);
}

export default Component;
