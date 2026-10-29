import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qlvg0jb_q.css';
import '../../css/k/kj31sb0wq.css';
import '../../css/f/fl0wl_bvf.css';
import '../../css/l/l9wn3db0n.css';
import '../../css/m/mw689itso.css';
import '../../css/y/ygrme69sp.css';
import '../../css/t/tgufvhb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qlvg0jb_q wm-k"/><path class="kj31sb0wq wm-k"/><path class="fl0wl_bvf wm-k"/><path class="l9wn3db0n wm-shine"/><path class="mw689itso wm-a"/><path class="wm-a ygrme69sp"/><path class="tgufvhb1b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:rss"} {...others} />);
}

export default Component;
