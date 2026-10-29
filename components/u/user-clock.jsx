import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdfq63b6n.css';
import '../../css/t/t34y70q8b.css';
import '../../css/g/g9b_7o2-o.css';
import '../../css/n/npx_lqeld.css';
import '../../css/q/qnel4-bvc.css';
import '../../css/s/scf5t3blm.css';
import '../../css/w/wpv54cbsu.css';
import '../../css/u/u-7y9zh1o.css';
import '../../css/v/v664xbb0q.css';
import '../../css/d/dz8w5ocus.css';
import '../../css/x/xmgl1205n.css';
import '../../css/v/vuy1y2klg.css';
import '../../css/y/y2f94bghp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tdfq63b6n wm-shadow"/><path class="t34y70q8b wm-k"/><path class="g9b_7o2-o wm-k"/><path class="npx_lqeld wm-k"/><path class="qnel4-bvc wm-k"/><path class="scf5t3blm wm-k"/><path class="wm-shine wpv54cbsu"/><path class="u-7y9zh1o wm-s"/><path class="v664xbb0q wm-s"/><path class="dz8w5ocus wm-s"/><path class="wm-s xmgl1205n"/><path class="vuy1y2klg wm-s"/><path class="wm-s y2f94bghp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:user-clock"} {...others} />);
}

export default Component;
