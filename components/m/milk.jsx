import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puh_erepc.css';
import '../../css/g/gso--tqxn.css';
import '../../css/x/xcj32pwfd.css';
import '../../css/c/cyd3bfbzu.css';
import '../../css/o/oxxphdb9b.css';
import '../../css/j/jaaqbdcfm.css';
import '../../css/g/g7a7yd4wn.css';
import '../../css/u/u4-umkfsy.css';
import '../../css/v/v6d_vb2fz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="puh_erepc wm-k"/><path class="gso--tqxn wm-k"/><path class="wm-k xcj32pwfd"/><path class="cyd3bfbzu wm-k"/><path class="oxxphdb9b wm-shine"/><path class="jaaqbdcfm wm-a"/><path class="g7a7yd4wn wm-a"/><path class="u4-umkfsy wm-a"/><path class="v6d_vb2fz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:milk"} {...others} />);
}

export default Component;
