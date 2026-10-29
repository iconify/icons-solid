import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f59k69bgu.css';
import '../../css/h/hl8kwccqj.css';
import '../../css/k/kh8uowbbu.css';
import '../../css/z/z4vhpubft.css';
import '../../css/v/vt_p_m54m.css';
import '../../css/e/eky972i3f.css';
import '../../css/m/mpe9dubvu.css';
import '../../css/o/ou_bbbtwf.css';
import '../../css/b/b_oakebob.css';
import '../../css/b/bo66h-bke.css';
import '../../css/p/ps3v67gtd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f59k69bgu wm-shadow"/><path class="hl8kwccqj wm-shadow"/><path class="kh8uowbbu"/><path class="z4vhpubft"/><path class="vt_p_m54m"/><path class="eky972i3f"/><path class="mpe9dubvu"/><path class="ou_bbbtwf"/><path class="b_oakebob"/><path class="bo66h-bke"/><path class="ps3v67gtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:sidebar"} {...others} />);
}

export default Component;
