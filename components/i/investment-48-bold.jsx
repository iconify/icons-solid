import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ta0lh091l.css';
import '../../css/t/tghfhx41n.css';
import '../../css/k/k_v0_2fwl.css';
import '../../css/e/el6foowsg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ta0lh091l"/><path class="tghfhx41n"/><path class="k_v0_2fwl"/><path class="el6foowsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:investment-48-bold"} {...others} />);
}

export default Component;
