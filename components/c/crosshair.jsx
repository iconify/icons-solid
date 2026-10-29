import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nsdbm5wad.css';
import '../../css/n/nkegmsznk.css';
import '../../css/n/np40dbc7o.css';
import '../../css/f/f60flw1rt.css';
import '../../css/o/op-z3bcgq.css';
import '../../css/b/baai7v3mv.css';
import '../../css/r/r9qrcpw9m.css';
import '../../css/w/wgmab-bsj.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="nsdbm5wad wm-shadow"/><path class="nkegmsznk"/><path class="np40dbc7o"/><path class="f60flw1rt"/><path class="op-z3bcgq"/><path class="baai7v3mv"/><path class="r9qrcpw9m"/><path class="wgmab-bsj wm-shine"/><path class="ilvbs_bdh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:crosshair"} {...others} />);
}

export default Component;
