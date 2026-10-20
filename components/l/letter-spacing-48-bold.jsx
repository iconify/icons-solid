import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lstoyk0re.css';
import '../../css/s/s4l_bwbwm.css';
import '../../css/x/x5tz2lbke.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lstoyk0re"/><path class="s4l_bwbwm"/><path class="x5tz2lbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:letter-spacing-48-bold"} {...others} />);
}

export default Component;
