import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/pd9636bmj.css';
import '../../css/g/gr5u6zb-c.css';
import '../../css/q/qha036bmv.css';
import '../../css/b/bwdflzb4z.css';
import '../../css/q/qax047bio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFXzhPeEy" x1="10" x2="14" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="pd9636bmj wm-k"/><path class="gr5u6zb-c wm-deco"/><path class="qha036bmv wm-k"/><path fill="url(#SVGFXzhPeEy)" class="bwdflzb4z wm-k"/><path class="qax047bio wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:shield-check"} {...others} />);
}

export default Component;
