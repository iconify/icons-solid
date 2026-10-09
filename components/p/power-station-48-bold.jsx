import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2wnij_0h.css';
import '../../css/o/o6j5_ubif.css';
import '../../css/l/lu5ol8bsu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h2wnij_0h"/><path class="o6j5_ubif"/><path class="lu5ol8bsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-station-48-bold"} {...others} />);
}

export default Component;
