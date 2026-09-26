import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6k5nuknj.css';
import '../../css/m/majzs5lkh.css';
import '../../css/h/h9fb_s1uk.css';
import '../../css/e/eyg8_m7bg.css';
import '../../css/q/q6szkcbpl.css';
import '../../css/w/wv_uagb0m.css';
import '../../css/i/id8s8lbxs.css';
import '../../css/k/kc25w_nqs.css';
import '../../css/x/xr8r9cbdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b6k5nuknj"/><path class="majzs5lkh"/><path class="h9fb_s1uk"/><path class="eyg8_m7bg"/><path class="q6szkcbpl"/><path class="wv_uagb0m"/><path class="id8s8lbxs"/><path class="kc25w_nqs"/><path class="xr8r9cbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-dot-dashed-outline"} {...others} />);
}

export default Component;
