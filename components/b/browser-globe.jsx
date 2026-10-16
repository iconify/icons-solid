import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryosbh_ci.css';
import '../../css/l/lj2-vtb_v.css';
import '../../css/r/rwg5m13ar.css';
import '../../css/g/gumqc9euk.css';
import '../../css/s/saavqkbtk.css';
import '../../css/s/sh-eo5bhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ryosbh_ci"/><path class="lj2-vtb_v"/><circle transform="rotate(90 16.55 16.53)" class="rwg5m13ar"/><circle transform="rotate(90 16.55 16.53)" class="gumqc9euk"/><ellipse transform="rotate(90 16.55 16.53)" class="saavqkbtk"/><path class="sh-eo5bhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-globe"} {...others} />);
}

export default Component;
