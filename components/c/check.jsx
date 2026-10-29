import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3ld_dwfz.css';
import '../../css/j/jquub949k.css';
import '../../css/f/f8bnrjb6o.css';
import '../../css/j/j8xoyljvp.css';
import '../../css/k/krted8aax.css';
import '../../css/x/xchyyeboh.css';
import '../../css/j/jb93ffbuo.css';
import '../../css/h/hiiax1bjk.css';
import '../../css/s/s_qw3gb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t3ld_dwfz wm-shadow"/><path class="jquub949k wm-shadow"/><path class="f8bnrjb6o"/><path class="j8xoyljvp"/><path class="krted8aax"/><path class="xchyyeboh"/><path class="jb93ffbuo wm-shine"/><path class="hiiax1bjk wm-shine"/><path class="s_qw3gb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:check"} {...others} />);
}

export default Component;
