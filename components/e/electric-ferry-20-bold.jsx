import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iams6mbdr.css';
import '../../css/k/khkze9bls.css';
import '../../css/t/t9laxhuoy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iams6mbdr"/><path class="khkze9bls"/><path class="t9laxhuoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-ferry-20-bold"} {...others} />);
}

export default Component;
