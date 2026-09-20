import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/t/te-a1p0fu.css';
import '../../css/s/s0h37_grs.css';
import '../../css/p/p4_7lpb6d.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="te-a1p0fu"/><path class="s0h37_grs"/><path class="p4_7lpb6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:globe-1"} {...others} />);
}

export default Component;
