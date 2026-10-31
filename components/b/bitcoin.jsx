import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bp8x95i7q.css';
import '../../css/k/k-4vjrb2k.css';
import '../../css/g/g17s_xbcp.css';
import '../../css/n/n_gc3mbqg.css';
import '../../css/o/o9m2tlnvv.css';
import '../../css/h/hussshbwn.css';
import '../../css/l/lye3cx4qu.css';
import '../../css/x/xspdq5bhd.css';
import '../../css/m/me86yxm4b.css';
import '../../css/v/vl25uet6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bp8x95i7q wm-shadow"/><path class="k-4vjrb2k wm-a"/><path class="g17s_xbcp wm-a"/><path class="n_gc3mbqg wm-a"/><path class="o9m2tlnvv wm-shine"/><path class="hussshbwn wm-k"/><path class="lye3cx4qu wm-k"/><path class="wm-k xspdq5bhd"/><path class="me86yxm4b wm-k"/><path class="vl25uet6l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:bitcoin"} {...others} />);
}

export default Component;
