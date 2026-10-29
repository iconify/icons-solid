import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4avvn0zb.css';
import '../../css/m/m1b7_r1_r.css';
import '../../css/v/vjl6-lq2j.css';
import '../../css/x/xj_0s5bdf.css';
import '../../css/p/przodrk7d.css';
import '../../css/c/c9qldob_p.css';
import '../../css/j/j-3qlr5-v.css';
import '../../css/s/sc-rrfbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4avvn0zb wm-shadow"/><path class="m1b7_r1_r wm-k"/><path class="vjl6-lq2j wm-k"/><path class="wm-k xj_0s5bdf"/><path class="przodrk7d wm-k"/><path class="c9qldob_p wm-shine"/><path class="j-3qlr5-v wm-a"/><path class="sc-rrfbqk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chart-bar-increasing"} {...others} />);
}

export default Component;
