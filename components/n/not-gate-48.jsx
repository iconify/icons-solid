import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcke4yb4t.css';
import '../../css/g/gdu4k7b7m.css';
import '../../css/l/lppnqit-l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vcke4yb4t"/><path class="gdu4k7b7m"/><path class="lppnqit-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:not-gate-48"} {...others} />);
}

export default Component;
