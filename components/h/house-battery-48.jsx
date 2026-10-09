import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/w/w45r9qedc.css';
import '../../css/o/ook3z_b8u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="w45r9qedc"/><path class="ook3z_b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-battery-48"} {...others} />);
}

export default Component;
