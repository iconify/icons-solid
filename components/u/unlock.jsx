import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc0rg_5ik.css';
import '../../css/i/iv_k7ib1t.css';
import '../../css/z/zfknulblg.css';
import '../../css/d/djk76mcpo.css';
import '../../css/q/qj9mhebyo.css';
import '../../css/d/dp1_q8b3h.css';
import '../../css/i/ie2p2cb9l.css';
import '../../css/n/nc9rshblk.css';
import '../../css/h/h67hclb4f.css';
import '../../css/z/ze3qs511a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc0rg_5ik wm-shadow"/><path class="iv_k7ib1t wm-k"/><path class="wm-k zfknulblg"/><path class="djk76mcpo wm-k"/><path class="qj9mhebyo wm-k"/><path class="dp1_q8b3h wm-k"/><path class="ie2p2cb9l wm-shine"/><path class="nc9rshblk wm-a"/><path class="h67hclb4f wm-a"/><path class="wm-a ze3qs511a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:unlock"} {...others} />);
}

export default Component;
