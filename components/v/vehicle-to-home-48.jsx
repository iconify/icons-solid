import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8g7dpcvt.css';
import '../../css/b/bc7iqrblt.css';
import '../../css/r/ricrltbdm.css';
import '../../css/s/smd4b0njc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u8g7dpcvt"/><path class="bc7iqrblt"/><path class="ricrltbdm"/><path class="smd4b0njc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vehicle-to-home-48"} {...others} />);
}

export default Component;
