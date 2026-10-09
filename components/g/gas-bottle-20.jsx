import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v99dkbc9l.css';
import '../../css/l/ltc2--b_x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v99dkbc9l"/><path class="ltc2--b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-bottle-20"} {...others} />);
}

export default Component;
