import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i9p6gnbba.css';
import '../../css/m/mrayr_b-i.css';
import '../../css/p/p1bdyjkjg.css';
import '../../css/q/qtbpumbkm.css';
import '../../css/a/ag6or2e3i.css';
import '../../css/i/i1j5o3bip.css';
import '../../css/c/cspock6kw.css';
import '../../css/w/w_lbwnh_b.css';
import '../../css/e/eedmhxbrq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="i9p6gnbba"/><path clip-rule="evenodd" class="mrayr_b-i"/><path class="p1bdyjkjg"/><path clip-rule="evenodd" class="qtbpumbkm"/><path class="ag6or2e3i"/><path clip-rule="evenodd" class="i1j5o3bip"/><path class="cspock6kw"/><path clip-rule="evenodd" class="w_lbwnh_b"/><path clip-rule="evenodd" class="eedmhxbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:malaria-pf-microscope2x-outline"} {...others} />);
}

export default Component;
