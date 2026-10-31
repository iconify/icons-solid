import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxlorlbel.css';
import '../../css/x/xoo1pdjje.css';
import '../../css/n/ntm1tgg2a.css';
import '../../css/b/b6kel5lpa.css';
import '../../css/b/b8ydvzbdy.css';
import '../../css/a/ah38yjp3w.css';
import '../../css/l/lceb6p25u.css';
import '../../css/h/h_ja0fbgk.css';
import '../../css/o/o0hgm8hfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lxlorlbel wm-k"/><path class="wm-a xoo1pdjje"/><path class="ntm1tgg2a wm-deco"/><path class="b6kel5lpa wm-k"/><path class="b8ydvzbdy wm-k"/><path class="ah38yjp3w wm-a"/><path class="lceb6p25u wm-shadow"/><path class="h_ja0fbgk wm-shine"/><path class="o0hgm8hfm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:christmas-tree"} {...others} />);
}

export default Component;
