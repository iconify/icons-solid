import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-6y13bjo.css';
import '../../css/p/p6pekkb3x.css';
import '../../css/l/lx8o3xa9k.css';
import '../../css/y/yxeom1bds.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l-6y13bjo"/><path class="p6pekkb3x"/><path class="lx8o3xa9k"/><path class="yxeom1bds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:satellite-dish-48"} {...others} />);
}

export default Component;
