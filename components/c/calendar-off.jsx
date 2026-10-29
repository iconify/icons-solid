import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrg1jcc6e.css';
import '../../css/m/m_sxrhblr.css';
import '../../css/v/vl3zev_2t.css';
import '../../css/j/j-jvcex_o.css';
import '../../css/k/k3wyhvblo.css';
import '../../css/b/bvgo1fbss.css';
import '../../css/k/kpo7d5gif.css';
import '../../css/c/c0y6xzbfq.css';
import '../../css/m/m75wgqb9q.css';
import '../../css/j/j9fwt86gm.css';
import '../../css/p/pjqqaqb6w.css';
import '../../css/v/v-0kyqcnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrg1jcc6e wm-shadow"/><path class="m_sxrhblr wm-k"/><path class="vl3zev_2t wm-k"/><path class="j-jvcex_o wm-k"/><path class="k3wyhvblo wm-k"/><path class="bvgo1fbss wm-k"/><path class="kpo7d5gif wm-shine"/><path class="c0y6xzbfq wm-a"/><path class="m75wgqb9q wm-a"/><path class="j9fwt86gm wm-k"/><path class="pjqqaqb6w wm-s"/><path class="v-0kyqcnl wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:calendar-off"} {...others} />);
}

export default Component;
