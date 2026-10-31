import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cof19ubym.css';
import '../../css/z/zsi1w_bhm.css';
import '../../css/t/tpws5j9_i.css';
import '../../css/p/pf-r4596i.css';
import '../../css/p/pbkdmq0jg.css';
import '../../css/e/er-yi41uv.css';
import '../../css/w/wp9kjzzji.css';
import '../../css/v/v9vlss0sn.css';
import '../../css/x/xdyoi6qgj.css';
import '../../css/z/z2bp3pb9m.css';
import '../../css/s/s4lpotb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cof19ubym wm-shadow"/><path class="zsi1w_bhm"/><path class="tpws5j9_i"/><path class="pf-r4596i"/><path class="pbkdmq0jg"/><path class="er-yi41uv"/><path class="wp9kjzzji"/><path class="v9vlss0sn"/><path class="xdyoi6qgj"/><path class="wm-shine z2bp3pb9m"/><path class="s4lpotb_q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:bone"} {...others} />);
}

export default Component;
