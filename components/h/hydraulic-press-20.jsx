import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0649ib9x.css';
import '../../css/e/e6u7bf88s.css';
import '../../css/n/nyx-ipbaz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l0649ib9x"/><path class="e6u7bf88s"/><path class="nyx-ipbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydraulic-press-20"} {...others} />);
}

export default Component;
