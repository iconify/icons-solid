import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_e3-2-2w.css';
import '../../css/k/kwtgjqbey.css';
import '../../css/j/jr_3drjmm.css';
import '../../css/s/sn3v6lbzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c_e3-2-2w"/><path class="kwtgjqbey"/><path class="jr_3drjmm"/><path class="sn3v6lbzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:closed-captioning-sparkle"} {...others} />);
}

export default Component;
