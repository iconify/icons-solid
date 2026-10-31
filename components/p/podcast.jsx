import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1na5gb0b.css';
import '../../css/q/qtoke_bsk.css';
import '../../css/b/bi7ahzbgs.css';
import '../../css/d/d_-hbwb_k.css';
import '../../css/o/og1kdbbka.css';
import '../../css/i/iywb5bb6v.css';
import '../../css/z/zxqc_pbhm.css';
import '../../css/q/qc23monvy.css';
import '../../css/f/fhgmf0uri.css';
import '../../css/c/c_r1x3lxk.css';
import '../../css/c/cdmbdccau.css';
import '../../css/o/ohw9xz4zu.css';
import '../../css/z/zqm2u0_5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w1na5gb0b wm-shadow"/><path class="qtoke_bsk wm-a"/><path class="bi7ahzbgs wm-a"/><path class="d_-hbwb_k wm-a"/><path class="og1kdbbka wm-a"/><path class="iywb5bb6v wm-a"/><path class="wm-a zxqc_pbhm"/><path class="qc23monvy wm-k"/><path class="fhgmf0uri wm-k"/><path class="c_r1x3lxk wm-k"/><path class="cdmbdccau wm-k"/><path class="ohw9xz4zu wm-k"/><path class="wm-shine zqm2u0_5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:podcast"} {...others} />);
}

export default Component;
