import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/modu3zppg.css';
import '../../css/i/i-3hvmfaa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="modu3zppg"/><path class="i-3hvmfaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-horizontal-48"} {...others} />);
}

export default Component;
