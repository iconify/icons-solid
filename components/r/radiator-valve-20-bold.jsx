import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjaxhlnkd.css';
import '../../css/v/vlwm4ybiy.css';
import '../../css/l/lpnx10b3p.css';
import '../../css/q/qho2-b78i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yjaxhlnkd"/><path class="vlwm4ybiy"/><path class="lpnx10b3p"/><path class="qho2-b78i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiator-valve-20-bold"} {...others} />);
}

export default Component;
