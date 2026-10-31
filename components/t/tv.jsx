import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/j46dh2g1o.css';
import '../../css/h/hj34tdf-r.css';
import '../../css/l/l39lfuh0p.css';
import '../../css/l/lgjahm51x.css';
import '../../css/q/qy2dwvndc.css';
import '../../css/v/vug_rebuj.css';
import '../../css/h/hj29fzolb.css';
import '../../css/b/b5et_bcgy.css';
import '../../css/z/z12nwlb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="j46dh2g1o"/><path class="hj34tdf-r"/><path class="l39lfuh0p"/><path class="lgjahm51x wm-shine"/><path class="qy2dwvndc wm-k"/><path class="vug_rebuj wm-a"/><path class="hj29fzolb"/><path class="b5et_bcgy"/><path class="wm-shine z12nwlb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:tv"} {...others} />);
}

export default Component;
