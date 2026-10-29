import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7v5rpb5h.css';
import '../../css/g/guhe9xfxx.css';
import '../../css/h/hexfw2tvk.css';
import '../../css/b/b3og57blt.css';
import '../../css/d/dhdo0fbga.css';
import '../../css/k/kfg63nw7s.css';
import '../../css/z/zoz9cvbpt.css';
import '../../css/l/l_8b9mzmd.css';
import '../../css/w/wv5k1ctav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b7v5rpb5h wm-shadow"/><path class="guhe9xfxx wm-shadow"/><path class="hexfw2tvk"/><path class="b3og57blt"/><path class="dhdo0fbga"/><path class="kfg63nw7s"/><path class="wm-shine zoz9cvbpt"/><path class="l_8b9mzmd wm-shine"/><path class="wv5k1ctav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:puzzle-piece"} {...others} />);
}

export default Component;
