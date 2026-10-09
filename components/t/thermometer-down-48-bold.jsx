import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxy2tubhz.css';
import '../../css/m/mw2e6bc0g.css';
import '../../css/r/rm1abvbtd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rxy2tubhz"/><path class="mw2e6bc0g"/><path class="rm1abvbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-down-48-bold"} {...others} />);
}

export default Component;
