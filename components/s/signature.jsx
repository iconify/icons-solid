import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rpbdetw-v.css';
import '../../css/b/bk105-bhh.css';
import '../../css/e/edra3_z1g.css';
import '../../css/j/jj13svtjl.css';
import '../../css/b/bbhoyykfl.css';
import '../../css/g/gn3sumybl.css';
import '../../css/i/iu0eiqb1r.css';
import '../../css/c/cm8bxcc_r.css';
import '../../css/o/omezwk3wg.css';
import '../../css/l/lqshojbkf.css';
import '../../css/u/ukcjo523e.css';
import '../../css/q/qf5s4fbbe.css';
import '../../css/t/twdnptunj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rpbdetw-v wm-shadow"/><path class="bk105-bhh wm-shadow"/><path class="edra3_z1g wm-a"/><path class="jj13svtjl wm-a"/><path class="bbhoyykfl wm-a"/><path class="gn3sumybl wm-k"/><path class="iu0eiqb1r wm-k"/><path class="cm8bxcc_r wm-k"/><path class="omezwk3wg wm-k"/><path class="lqshojbkf wm-shine"/><path class="ukcjo523e wm-deco"/><path class="qf5s4fbbe wm-deco"/><path class="twdnptunj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:signature"} {...others} />);
}

export default Component;
