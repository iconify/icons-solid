import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mx4le0bgw.css';
import '../../css/j/jf9bq5btj.css';
import '../../css/c/czjnb_77l.css';
import '../../css/m/my25tqbdk.css';
import '../../css/d/ds7w9zb-w.css';
import '../../css/m/m7mdlfbju.css';
import '../../css/j/jni1i5bra.css';
import '../../css/b/bngzmsbem.css';
import '../../css/w/wjen2bbnq.css';
import '../../css/x/xo70rh8km.css';
import '../../css/n/nhqn-6bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mx4le0bgw wm-k"/><path class="jf9bq5btj wm-k"/><path class="czjnb_77l wm-k"/><path class="my25tqbdk wm-k"/><path class="ds7w9zb-w wm-shine"/><path class="m7mdlfbju wm-a"/><path class="jni1i5bra wm-s"/><path class="bngzmsbem wm-s"/><path class="wjen2bbnq wm-s"/><path class="wm-shine xo70rh8km"/><path class="nhqn-6bvk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:file-cog"} {...others} />);
}

export default Component;
