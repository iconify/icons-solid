import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtc4_gbjh.css';
import '../../css/y/y4wwydbht.css';
import '../../css/y/yctemwfli.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xtc4_gbjh"/><path class="y4wwydbht"/><path class="yctemwfli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tile-20"} {...others} />);
}

export default Component;
