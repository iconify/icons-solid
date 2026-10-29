import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vkxbtui0m.css';
import '../../css/l/l2nxvz1yb.css';
import '../../css/m/mw46njbns.css';
import '../../css/m/m5f49zbya.css';
import '../../css/k/kro82vbrq.css';
import '../../css/s/s62vz6byr.css';
import '../../css/m/mx0vdxwtd.css';
import '../../css/w/wbwow8bgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vkxbtui0m wm-deco"/><path class="l2nxvz1yb wm-deco"/><path class="mw46njbns wm-deco"/><path class="m5f49zbya wm-k"/><path class="kro82vbrq wm-a"/><path class="s62vz6byr wm-s"/><path class="mx0vdxwtd wm-k"/><path class="wbwow8bgk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-dish-blueprint"} {...others} />);
}

export default Component;
