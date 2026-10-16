import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl9bja3bz.css';
import '../../css/r/rp0ywbdoi.css';
import '../../css/f/f99glvbde.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cl9bja3bz"/><path class="rp0ywbdoi"/><path class="f99glvbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:telemetry-48"} {...others} />);
}

export default Component;
