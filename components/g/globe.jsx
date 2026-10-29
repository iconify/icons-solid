import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/t/t0-ajfn1i.css';
import '../../css/i/i7zu08bkl.css';
import '../../css/f/fdf08cccu.css';
import '../../css/w/wb716_bag.css';
import '../../css/j/jfztt4kyq.css';
import '../../css/c/czl3t-bsb.css';
import '../../css/n/nfy3clz8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="t0-ajfn1i wm-k"/><path class="i7zu08bkl wm-k"/><path class="fdf08cccu wm-shine"/><path class="wb716_bag wm-k"/><path class="jfztt4kyq wm-k"/><path class="czl3t-bsb wm-k"/><path class="nfy3clz8i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:globe"} {...others} />);
}

export default Component;
