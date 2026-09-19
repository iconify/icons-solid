import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4aa7243d.css';
import '../../css/z/zpp4vn3vh.css';
import '../../css/h/hfr88zcsb.css';
import '../../css/z/z0dvjiblq.css';
import '../../css/u/ux_xuyb4l.css';
import '../../css/e/e9gp5o9ig.css';
import '../../css/z/z2epv61lw.css';
import '../../css/r/rtoiw9sng.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="o4aa7243d"/><path clip-rule="evenodd" class="zpp4vn3vh"/><path class="hfr88zcsb"/><path class="z0dvjiblq"/><path clip-rule="evenodd" class="ux_xuyb4l"/><path class="e9gp5o9ig"/><path class="z2epv61lw"/><path clip-rule="evenodd" class="rtoiw9sng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:ambulance"} {...others} />);
}

export default Component;
