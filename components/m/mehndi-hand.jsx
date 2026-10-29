import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ub5hi0k4b.css';
import '../../css/d/ddfdzdbta.css';
import '../../css/l/lg09h4b6x.css';
import '../../css/a/aqu0ghbuh.css';
import '../../css/x/xe6a4mb4v.css';
import '../../css/f/ffpyzib3b.css';
import '../../css/b/bkcmtf8tb.css';
import '../../css/t/ty78-5bav.css';
import '../../css/k/k22mghbiw.css';
import '../../css/j/jbw6ibjym.css';
import '../../css/j/jyvddy6dx.css';
import '../../css/i/ixxudf3ff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ub5hi0k4b wm-shadow"/><path class="ddfdzdbta wm-shadow"/><path class="lg09h4b6x"/><path class="aqu0ghbuh"/><path class="xe6a4mb4v"/><path class="ffpyzib3b"/><path class="bkcmtf8tb wm-shine"/><path class="ty78-5bav wm-shine"/><path class="k22mghbiw"/><path class="jbw6ibjym"/><path class="jyvddy6dx"/><path class="ixxudf3ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:mehndi-hand"} {...others} />);
}

export default Component;
