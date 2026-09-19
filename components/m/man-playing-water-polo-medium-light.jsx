import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sreryg2eb.css';
import '../../css/z/ze2mbwbva.css';
import '../../css/m/mazbidbhd.css';
import '../../css/z/z6-6rzb6y.css';
import '../../css/a/a8kk0c1rj.css';
import '../../css/u/u2p3q0s6k.css';
import '../../css/x/x4s7rgeuc.css';
import '../../css/z/zsw_54n5b.css';
import '../../css/q/q-gkk_vww.css';
import '../../css/m/mvw-d4j8h.css';
import '../../css/d/d-d13-ozq.css';
import '../../css/j/j72lgzb_f.css';
import '../../css/g/g6a14waxl.css';
import '../../css/h/hub5iqblt.css';
import '../../css/c/cju_yybap.css';
import '../../css/p/plojycc_i.css';
import '../../css/w/w4ugs6b0h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="sreryg2eb"/><path class="ze2mbwbva"/><path class="mazbidbhd"/><path class="z6-6rzb6y"/><path class="a8kk0c1rj"/><path class="u2p3q0s6k"/><path class="x4s7rgeuc"/><path class="zsw_54n5b"/><path class="q-gkk_vww"/><path class="mvw-d4j8h"/><path class="d-d13-ozq"/><path class="j72lgzb_f"/><path class="g6a14waxl"/><path class="hub5iqblt"/><path class="cju_yybap"/><path class="plojycc_i"/><path class="w4ugs6b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-playing-water-polo-medium-light"} {...others} />);
}

export default Component;
