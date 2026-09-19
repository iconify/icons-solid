import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/k/kz_q4tp_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><circle class="xr1zzs9rr"/><path class="kz_q4tp_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:play-circle"} {...others} />);
}

export default Component;
