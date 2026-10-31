import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xf2bidbwe.css';
import '../../css/h/hxlfbmjqx.css';
import '../../css/k/k0pd1sbej.css';
import '../../css/x/x7sxc7bwz.css';
import '../../css/x/xbmhhtb1e.css';
import '../../css/v/vrf1x9hkt.css';
import '../../css/k/kyof10b9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xf2bidbwe"/><path class="hxlfbmjqx"/><path class="k0pd1sbej wm-shine"/><path class="x7sxc7bwz"/><path class="xbmhhtb1e"/><path class="vrf1x9hkt"/><path class="kyof10b9l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:lamp"} {...others} />);
}

export default Component;
