import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vszc_mbbq.css';
import '../../css/l/l3g0p0bwu.css';
import '../../css/k/k72_kgm1o.css';
import '../../css/y/yj_y3dp7d.css';
import '../../css/f/f48qsgb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vszc_mbbq"/><path class="l3g0p0bwu"/><path class="k72_kgm1o wm-shine"/><path class="wm-k yj_y3dp7d"/><path class="f48qsgb5t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:vault"} {...others} />);
}

export default Component;
