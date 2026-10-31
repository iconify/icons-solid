import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/s/sgpl7wbco.css';
import '../../css/n/nh3ldcc6x.css';
import '../../css/v/vqmaww45n.css';
import '../../css/v/vggqe8bxj.css';
import '../../css/j/jnooikbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPaSLLbsF" x1="0" x2="0" y1="2.83" y2="21.17" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGZ4p6Kbsl" x1="2.83" x2="21.17" y1="2.83" y2="21.17" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGPaSLLbsF)" stroke="url(#SVGZ4p6Kbsl)" class="sgpl7wbco wm-k"/><path class="nh3ldcc6x wm-shine"/><path class="vqmaww45n wm-shine"/><path class="vggqe8bxj wm-shine"/><path class="jnooikbiq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:rolling-pin"} {...others} />);
}

export default Component;
