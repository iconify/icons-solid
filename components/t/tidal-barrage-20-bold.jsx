import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yox-1ubct.css';
import '../../css/w/wqshwfdjv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yox-1ubct"/><path class="wqshwfdjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-barrage-20-bold"} {...others} />);
}

export default Component;
