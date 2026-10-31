import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xged-fbhf.css';
import '../../css/s/sxgvpnbja.css';
import '../../css/b/b28c7-bjz.css';
import '../../css/q/q9f4et_5b.css';
import '../../css/z/zx1dlqbym.css';
import '../../css/y/yse1pv_bn.css';
import '../../css/i/i3dzmtb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xged-fbhf"/><path class="sxgvpnbja wm-k"/><path class="b28c7-bjz wm-k"/><path class="q9f4et_5b wm-shadow"/><path class="wm-shine zx1dlqbym"/><path class="wm-shine yse1pv_bn"/><path class="i3dzmtb9d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:receipt"} {...others} />);
}

export default Component;
