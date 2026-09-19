import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dj7cthbzw.css';
import '../../css/v/von58ybpf.css';
import '../../css/j/jug1c4y0e.css';
import '../../css/r/rpmuv8pce.css';
import '../../css/f/fkrusbcji.css';
import '../../css/h/hexs_6xha.css';
import '../../css/u/u4jv5cc2k.css';
import '../../css/y/y-n3n_bgn.css';
import '../../css/r/rf9s48b8e.css';
import '../../css/p/pdbm09brr.css';
import '../../css/l/lsic7rd_w.css';
import '../../css/w/w4rpov8xg.css';
import '../../css/d/dyyuqseyd.css';
import '../../css/v/vc-dbrb5o.css';
import '../../css/f/fwthwm0-w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dj7cthbzw"/><path class="von58ybpf"/><path class="jug1c4y0e"/><path class="rpmuv8pce"/><path class="fkrusbcji"/><path class="hexs_6xha"/><path class="u4jv5cc2k"/><path class="y-n3n_bgn"/><path class="rf9s48b8e"/><path class="pdbm09brr"/><path class="lsic7rd_w"/><path class="w4rpov8xg"/><path class="dyyuqseyd"/><path class="vc-dbrb5o"/><path class="fwthwm0-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-shrugging"} {...others} />);
}

export default Component;
