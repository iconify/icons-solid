import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auuyt2boe.css';
import '../../css/s/sgfxn2blc.css';
import '../../css/p/p0dk-_bmc.css';
import '../../css/o/ok5ynbbts.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="auuyt2boe"/><path class="sgfxn2blc"/><path class="p0dk-_bmc"/><path class="ok5ynbbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-switch-48"} {...others} />);
}

export default Component;
