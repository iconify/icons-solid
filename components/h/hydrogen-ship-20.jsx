import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_z7uitjb.css';
import '../../css/v/v2u1wbcfd.css';
import '../../css/t/tvp2jabtf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k_z7uitjb"/><path class="v2u1wbcfd"/><path class="tvp2jabtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-ship-20"} {...others} />);
}

export default Component;
