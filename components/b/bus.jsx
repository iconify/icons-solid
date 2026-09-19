import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uwyl71d6b.css';
import '../../css/e/ersbdzbti.css';
import '../../css/o/oqvsbrv0p.css';
import '../../css/u/ukf21cb-i.css';
import '../../css/s/s69uf4kca.css';
import '../../css/z/zd7-fr_id.css';
import '../../css/p/pbfxw-byn.css';
import '../../css/s/s_5nh_hpn.css';
import '../../css/h/hzacrmngk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uwyl71d6b"/><path class="ersbdzbti"/><path clip-rule="evenodd" class="oqvsbrv0p"/><path class="ukf21cb-i"/><path clip-rule="evenodd" class="s69uf4kca"/><path class="zd7-fr_id"/><path class="pbfxw-byn"/><rect class="s_5nh_hpn"/><rect class="hzacrmngk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bus"} {...others} />);
}

export default Component;
