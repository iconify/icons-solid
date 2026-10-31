import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/g/gyzl8hbwt.css';
import '../../css/m/mdelavepe.css';
import '../../css/z/z7azapbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJX5E2cIa" x1="9.99" x2="13.99" y1="1.74" y2="22.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="gyzl8hbwt wm-k"/><path class="mdelavepe wm-deco"/><path fill="url(#SVGJX5E2cIa)" class="wm-k z7azapbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:circle-dashed"} {...others} />);
}

export default Component;
