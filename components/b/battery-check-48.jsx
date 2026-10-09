import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri3k7ob7e.css';
import '../../css/a/a-4s07bqr.css';
import '../../css/p/py4nxfbnh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ri3k7ob7e"/><path class="a-4s07bqr"/><path class="py4nxfbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-check-48"} {...others} />);
}

export default Component;
