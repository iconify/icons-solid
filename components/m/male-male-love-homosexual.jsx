import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epi78ttme.css';
import '../../css/v/vl2hk_b2r.css';
import '../../css/m/mmi7p8b_c.css';
import '../../css/j/jldpk3bgb.css';
import '../../css/s/smd78ac7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="epi78ttme"/><path class="vl2hk_b2r"/><path class="mmi7p8b_c"/><path class="jldpk3bgb"/><path class="smd78ac7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:male-male-love-homosexual"} {...others} />);
}

export default Component;
