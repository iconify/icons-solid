import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngsc3874k.css';
import '../../css/w/w4k8d9clk.css';
import '../../css/m/mg_bfdc9j.css';
import '../../css/h/hkfflhbav.css';
import '../../css/d/d651uqlrd.css';
import '../../css/s/s4y21ytfo.css';
import '../../css/s/sbq_dlbwp.css';
import '../../css/d/dndw15b4r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ngsc3874k"/><path class="w4k8d9clk"/><path class="mg_bfdc9j"/><path class="hkfflhbav"/><path class="d651uqlrd"/><path class="s4y21ytfo"/><path class="sbq_dlbwp"/><path class="dndw15b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:passport-globe"} {...others} />);
}

export default Component;
