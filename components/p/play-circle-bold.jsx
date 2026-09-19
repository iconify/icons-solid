import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/k/kz_q4tp_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><circle class="xr1zzs9rr"/><path class="kz_q4tp_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:play-circle-bold"} {...others} />);
}

export default Component;
