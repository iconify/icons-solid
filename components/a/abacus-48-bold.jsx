import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8oy8xbju.css';
import '../../css/i/i3509_9wg.css';
import '../../css/r/rro8xm0eh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m8oy8xbju"/><path class="i3509_9wg"/><path class="rro8xm0eh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:abacus-48-bold"} {...others} />);
}

export default Component;
