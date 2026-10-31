import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrmmlfagg.css';
import '../../css/h/h8pqtjlxy.css';
import '../../css/h/hr5sec-xy.css';
import '../../css/h/hcnslb_cb.css';
import '../../css/a/arv3bcbzm.css';
import '../../css/i/is4l0n2nb.css';
import '../../css/f/fqqhzeb2g.css';
import '../../css/q/q3cd_zkjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nrmmlfagg wm-k"/><path class="h8pqtjlxy wm-deco"/><path class="hr5sec-xy wm-k"/><path class="hcnslb_cb wm-k"/><path class="arv3bcbzm wm-shadow"/><path class="is4l0n2nb wm-shine"/><path class="fqqhzeb2g wm-shine"/><path class="q3cd_zkjm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:images"} {...others} />);
}

export default Component;
