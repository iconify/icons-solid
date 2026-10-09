import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txoun62ha.css';
import '../../css/e/et5ntprfl.css';
import '../../css/l/l9k2yacns.css';
import '../../css/v/v-0w_5bex.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="txoun62ha"/><path class="et5ntprfl"/><path class="l9k2yacns"/><path class="v-0w_5bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sim-card-48-bold"} {...others} />);
}

export default Component;
