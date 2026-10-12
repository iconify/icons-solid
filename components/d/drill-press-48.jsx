import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1fw4u24k.css';
import '../../css/a/ayk1lqtqi.css';
import '../../css/q/qbjntbton.css';
import '../../css/u/uzx1cpbdj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x1fw4u24k"/><path class="ayk1lqtqi"/><path class="qbjntbton"/><path class="uzx1cpbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drill-press-48"} {...others} />);
}

export default Component;
