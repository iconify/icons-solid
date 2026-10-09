import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7plo0j7z.css';
import '../../css/c/crwtq5bps.css';
import '../../css/i/ijtbhzpet.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w7plo0j7z"/><path class="crwtq5bps"/><path class="ijtbhzpet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-sync-48-bold"} {...others} />);
}

export default Component;
