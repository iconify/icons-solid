import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuhs-7isj.css';
import '../../css/v/v8tru6aav.css';
import '../../css/p/p9d3s-bhs.css';
import '../../css/a/ap9n3oefx.css';
import '../../css/m/mfc-ku-0h.css';
import '../../css/l/lv6wvob_l.css';
import '../../css/h/h29nfh_ix.css';
import '../../css/b/b3l0a1b7l.css';
import '../../css/f/fyk8inb6v.css';
import '../../css/i/iwj1rbcdg.css';
import '../../css/m/m3kcin1xx.css';
import '../../css/i/iafee1bsb.css';
import '../../css/k/keqmuebxk.css';
import '../../css/c/cwsvm-b7m.css';
import '../../css/v/vpczobclo.css';
import '../../css/f/fgfw_sbhx.css';
import '../../css/p/pn5ehlgvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iuhs-7isj wm-shadow"/><path class="v8tru6aav wm-k"/><path class="p9d3s-bhs wm-k"/><path class="ap9n3oefx wm-k"/><path class="mfc-ku-0h wm-k"/><path class="lv6wvob_l wm-k"/><path class="h29nfh_ix wm-shine"/><path class="b3l0a1b7l wm-k"/><path class="fyk8inb6v wm-k"/><path class="iwj1rbcdg wm-a"/><path class="m3kcin1xx wm-a"/><path class="iafee1bsb wm-s"/><path class="keqmuebxk wm-s"/><path class="cwsvm-b7m wm-s"/><path class="vpczobclo wm-s"/><path class="fgfw_sbhx wm-s"/><path class="pn5ehlgvn wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bell-plus"} {...others} />);
}

export default Component;
