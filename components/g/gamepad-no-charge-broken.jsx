import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bomtt39jn.css';
import '../../css/z/z2kr6ybug.css';
import '../../css/k/k2g_6t_tj.css';
import '../../css/u/uw_f3e0nw.css';
import '../../css/j/jdkg2b8su.css';
import '../../css/i/i2afqdhro.css';
import '../../css/l/li08e_y6g.css';
import '../../css/k/kdceb2bpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bomtt39jn"/><path class="z2kr6ybug"/><path class="k2g_6t_tj"/><path class="uw_f3e0nw"/><path class="jdkg2b8su"/><path class="i2afqdhro"/><path class="li08e_y6g"/><path class="kdceb2bpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-no-charge-broken"} {...others} />);
}

export default Component;
