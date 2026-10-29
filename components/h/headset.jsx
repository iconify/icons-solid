import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kep7d1b1e.css';
import '../../css/i/iqixnrqmv.css';
import '../../css/d/da8tv4gvl.css';
import '../../css/z/zz7g2e29w.css';
import '../../css/f/f_cbjmboj.css';
import '../../css/n/njvb82pxp.css';
import '../../css/e/e0ot_9h4f.css';
import '../../css/y/yph6orblc.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kep7d1b1e wm-shadow"/><path class="iqixnrqmv"/><path class="da8tv4gvl"/><path class="zz7g2e29w"/><path class="f_cbjmboj"/><path class="njvb82pxp"/><path class="e0ot_9h4f"/><path class="wm-shine yph6orblc"/><path class="q_yw93bsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:headset"} {...others} />);
}

export default Component;
