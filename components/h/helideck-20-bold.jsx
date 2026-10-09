import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwbb8x53o.css';
import '../../css/m/mufw90bzh.css';
import '../../css/p/pvxhf4bgm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nwbb8x53o"/><path class="mufw90bzh"/><path class="pvxhf4bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:helideck-20-bold"} {...others} />);
}

export default Component;
