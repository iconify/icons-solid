import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwc8_0vln.css';
import '../../css/j/jwt9puapv.css';
import '../../css/h/hx1joebdq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hwc8_0vln"/><path class="jwt9puapv"/><path class="hx1joebdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermocouple-20"} {...others} />);
}

export default Component;
