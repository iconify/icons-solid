import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3g_hqbet.css';
import '../../css/m/mhuifpbqc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e3g_hqbet"/><path class="mhuifpbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-lantern-48-bold"} {...others} />);
}

export default Component;
