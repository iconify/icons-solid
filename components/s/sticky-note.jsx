import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aso16wbnb.css';
import '../../css/o/orfc7mszm.css';
import '../../css/v/v8wr1vbve.css';
import '../../css/x/xyr7_ruqt.css';
import '../../css/k/ka1ol_k6g.css';
import '../../css/c/cawpcybmy.css';
import '../../css/g/gke29cb3k.css';
import '../../css/d/doulln9ay.css';
import '../../css/e/e4fvtqb7w.css';
import '../../css/g/gjwm_c9ce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aso16wbnb wm-k"/><path class="orfc7mszm wm-k"/><path class="v8wr1vbve wm-k"/><path class="wm-k xyr7_ruqt"/><path class="ka1ol_k6g wm-a"/><path class="cawpcybmy wm-a"/><path class="gke29cb3k wm-a"/><path class="doulln9ay wm-k"/><path class="e4fvtqb7w wm-k"/><path class="gjwm_c9ce wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:sticky-note"} {...others} />);
}

export default Component;
