import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/x/xxrokybtq.css';
import '../../css/k/km1unnwte.css';
import '../../css/g/gebf_issq.css';
import '../../css/y/ydbcmsbof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGsGHfNeKS" x1="0" x2="0" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGUOgPcdXI" x1="2.75" x2="21.25" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGsGHfNeKS)" stroke="url(#SVGUOgPcdXI)" class="wm-k xxrokybtq"/><path fill="url(#SVGUOgPcdXI)" class="km1unnwte wm-a"/><path class="gebf_issq wm-shine"/><path class="wm-shine ydbcmsbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:grape"} {...others} />);
}

export default Component;
