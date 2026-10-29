import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fkgvl4_hz.css';
import '../../css/s/s471rb7mu.css';
import '../../css/k/kucuxfb1t.css';
import '../../css/w/wzijwl39m.css';
import '../../css/d/d-c_quigx.css';
import '../../css/r/r1oo99bph.css';
import '../../css/x/xzw4cl05c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fkgvl4_hz wm-deco"/><path class="s471rb7mu wm-deco"/><path class="kucuxfb1t wm-deco"/><path class="wm-k wzijwl39m"/><path class="d-c_quigx wm-a"/><path class="r1oo99bph wm-s"/><path class="wm-k xzw4cl05c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-cog-blueprint"} {...others} />);
}

export default Component;
