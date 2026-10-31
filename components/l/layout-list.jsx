import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpqf8yb1m.css';
import '../../css/y/y8tpvzgsl.css';
import '../../css/t/t30k-0b8n.css';
import '../../css/y/y9622ib-q.css';
import '../../css/b/bys0u6bgy.css';
import '../../css/s/s59we1b3c.css';
import '../../css/r/r6ru96bdk.css';
import '../../css/b/brvyeblto.css';
import '../../css/w/wn73gbkdk.css';
import '../../css/t/tlcrwhbgx.css';
import '../../css/y/yd6o8ebky.css';
import '../../css/h/hl4dgfp0n.css';
import '../../css/q/q183fzbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bpqf8yb1m wm-shadow"/><path class="wm-a y8tpvzgsl"/><path class="t30k-0b8n wm-a"/><path class="wm-a y9622ib-q"/><path class="bys0u6bgy wm-a"/><path class="s59we1b3c wm-a"/><path class="r6ru96bdk wm-a"/><path class="brvyeblto wm-k"/><path class="wm-k wn73gbkdk"/><path class="tlcrwhbgx wm-k"/><path class="wm-k yd6o8ebky"/><path class="hl4dgfp0n wm-k"/><path class="q183fzbhe wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:layout-list"} {...others} />);
}

export default Component;
