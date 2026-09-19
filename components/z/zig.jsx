import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scqsfeb2k.css';
import '../../css/h/hon6-2r0s.css';
import '../../css/g/gwp381bex.css';
import '../../css/p/prgm-8b7j.css';
import '../../css/f/f6pyir45l.css';
import '../../css/s/s1t1x_bbb.css';
import '../../css/l/lhgf8vg7t.css';
import '../../css/f/f5o2f9bgc.css';
import '../../css/y/y0xx9c9ot.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="scqsfeb2k"><path class="hon6-2r0s"/><path class="gwp381bex"/><path class="prgm-8b7j"/><path class="f6pyir45l"/><path class="s1t1x_bbb"/><path class="lhgf8vg7t"/><path class="f5o2f9bgc"/><path class="y0xx9c9ot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:zig"} {...others} />);
}

export default Component;
