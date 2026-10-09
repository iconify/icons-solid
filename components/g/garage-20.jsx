import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qypcfebhs.css';
import '../../css/e/e8j_nwbgk.css';
import '../../css/b/by5qfxf8e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qypcfebhs"/><path class="e8j_nwbgk"/><path class="by5qfxf8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:garage-20"} {...others} />);
}

export default Component;
