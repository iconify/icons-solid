import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs75gccsu.css';
import '../../css/l/leqhccbhf.css';
import '../../css/e/e9wm7acuv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zs75gccsu"/><path class="leqhccbhf"/><path class="e9wm7acuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:demand-response-48"} {...others} />);
}

export default Component;
