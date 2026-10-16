import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az46grrij.css';
import '../../css/k/k0js0g_8g.css';
import '../../css/s/sp-6bhk-r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="az46grrij"/><path class="k0js0g_8g"/><path class="sp-6bhk-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:liquid-hydrogen-20"} {...others} />);
}

export default Component;
