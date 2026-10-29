import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_ck7acce.css';
import '../../css/s/ssou-cczq.css';
import '../../css/m/mro73i6np.css';
import '../../css/v/v58nz_duf.css';
import '../../css/x/xo-qteb8o.css';
import '../../css/d/d-r1e7btc.css';
import '../../css/t/tp-j5bpkf.css';
import '../../css/v/vljzzeq0z.css';
import '../../css/d/d0b4vibph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c_ck7acce wm-shadow"/><path class="ssou-cczq wm-shadow"/><path class="mro73i6np"/><path class="v58nz_duf"/><path class="xo-qteb8o"/><path class="d-r1e7btc"/><path class="tp-j5bpkf wm-shine"/><path class="vljzzeq0z wm-shine"/><path class="d0b4vibph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:dollar-sign"} {...others} />);
}

export default Component;
