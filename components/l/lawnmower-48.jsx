import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkmil7ekn.css';
import '../../css/o/olfq5v7hu.css';
import '../../css/w/wl8lujbqh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dkmil7ekn"/><path class="olfq5v7hu"/><path class="wl8lujbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lawnmower-48"} {...others} />);
}

export default Component;
