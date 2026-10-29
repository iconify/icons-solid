import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/noc_-kb3n.css';
import '../../css/x/x39psm5lq.css';
import '../../css/k/ke0e_ac7p.css';
import '../../css/i/il2v852ox.css';
import '../../css/p/puvancbmb.css';
import '../../css/x/xwsz_egbd.css';
import '../../css/n/n83s70ldo.css';
import '../../css/n/nbzbvmbqu.css';
import '../../css/g/g38d3zx7t.css';
import '../../css/k/kdrza4beu.css';
import '../../css/e/erkocnwsh.css';
import '../../css/z/zclk9mb2w.css';
import '../../css/t/t1vgrf3dd.css';
import '../../css/z/zyvi1qbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="noc_-kb3n wm-k"/><path class="wm-k x39psm5lq"/><path class="ke0e_ac7p wm-k"/><path class="il2v852ox wm-shine"/><path class="puvancbmb wm-k"/><path class="wm-k xwsz_egbd"/><path class="n83s70ldo wm-k"/><path class="nbzbvmbqu wm-shine"/><path class="g38d3zx7t wm-a"/><path class="kdrza4beu wm-a"/><path class="erkocnwsh wm-a"/><path class="wm-s zclk9mb2w"/><path class="t1vgrf3dd wm-s"/><path class="wm-s zyvi1qbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:map-pin-off"} {...others} />);
}

export default Component;
