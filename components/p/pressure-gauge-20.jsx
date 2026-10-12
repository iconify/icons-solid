import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwxtv1bud.css';
import '../../css/y/y3799mbrd.css';
import '../../css/w/wix60v6xk.css';
import '../../css/w/w-bdeccnj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dwxtv1bud"/><path class="y3799mbrd"/><path class="wix60v6xk"/><path class="w-bdeccnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pressure-gauge-20"} {...others} />);
}

export default Component;
