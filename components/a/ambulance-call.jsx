import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzi-tdbdt.css';
import '../../css/c/cc6vpcc9e.css';
import '../../css/n/nlym42_wd.css';
import '../../css/f/fa69o_bkb.css';
import '../../css/k/k9gv_goyb.css';
import '../../css/j/j6xshfbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uzi-tdbdt"/><path class="cc6vpcc9e"/><path class="nlym42_wd"/><path class="fa69o_bkb"/><path class="k9gv_goyb"/><path class="j6xshfbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:ambulance-call"} {...others} />);
}

export default Component;
