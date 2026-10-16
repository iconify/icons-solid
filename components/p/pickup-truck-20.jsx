import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg06azbhk.css';
import '../../css/g/gezow-b2p.css';
import '../../css/e/eiww21t6d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tg06azbhk"/><path class="gezow-b2p"/><path class="eiww21t6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pickup-truck-20"} {...others} />);
}

export default Component;
