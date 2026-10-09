import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cohfbvw_w.css';
import '../../css/w/ws9mn_3ua.css';
import '../../css/x/xkkhb5coq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cohfbvw_w"/><path class="ws9mn_3ua"/><path class="xkkhb5coq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:timer-48"} {...others} />);
}

export default Component;
