import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo64yvbkk.css';
import '../../css/q/q5h959_9p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xo64yvbkk"/><path class="q5h959_9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pen-sparkle-48"} {...others} />);
}

export default Component;
