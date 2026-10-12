import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_82bfbeu.css';
import '../../css/w/wl2ljnc3w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c_82bfbeu"/><path class="wl2ljnc3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:function-48-bold"} {...others} />);
}

export default Component;
