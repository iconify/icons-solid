import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p20d__orr.css';
import '../../css/h/hxy5vm6-q.css';
import '../../css/v/vy_mjj2zg.css';
import '../../css/i/iy5e-0bly.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p20d__orr"/><path class="hxy5vm6-q"/><g id="SVGCwrnbc9w"><path class="vy_mjj2zg"/><path class="iy5e-0bly"/></g><use width="100%" height="100%" href="#SVGCwrnbc9w" transform="matrix(-1 0 0 1 512 0)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mo-1x1"} {...others} />);
}

export default Component;
