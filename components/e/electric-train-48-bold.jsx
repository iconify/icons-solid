import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cip6-i4fr.css';
import '../../css/e/ev-yt_b5j.css';
import '../../css/i/ib9lssnqx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cip6-i4fr"/><path class="ev-yt_b5j"/><path class="ib9lssnqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-train-48-bold"} {...others} />);
}

export default Component;
