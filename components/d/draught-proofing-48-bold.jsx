import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_-7pbckv.css';
import '../../css/p/p39fyrbdm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r_-7pbckv"/><path class="p39fyrbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:draught-proofing-48-bold"} {...others} />);
}

export default Component;
