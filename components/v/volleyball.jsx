import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgwhrxscd.css';
import '../../css/z/zgqw7ac9w.css';
import '../../css/v/vo3x74bsb.css';
import '../../css/d/dkhanfe_e.css';
import '../../css/w/wzc24sata.css';
import '../../css/j/jciez7brk.css';
import '../../css/k/kskq8ghfx.css';
import '../../css/b/bljuorbfa.css';
import '../../css/f/f5og43u6w.css';
import '../../css/f/f3v_6ya8f.css';
import '../../css/k/kipcohb0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bgwhrxscd wm-shadow"/><path class="wm-shadow zgqw7ac9w"/><path class="vo3x74bsb"/><path class="dkhanfe_e"/><path class="wzc24sata"/><path class="jciez7brk"/><path class="kskq8ghfx wm-shine"/><path class="bljuorbfa wm-shine"/><path class="f5og43u6w"/><path class="f3v_6ya8f"/><path class="kipcohb0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:volleyball"} {...others} />);
}

export default Component;
