import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nx9b_s0ui.css';
import '../../css/i/itvkagoch.css';
import '../../css/k/kpzw3mbym.css';
import '../../css/z/zj2p4py0y.css';
import '../../css/k/kb42jzcum.css';
import '../../css/b/beul8bqqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nx9b_s0ui"/><path class="itvkagoch"/><path class="kpzw3mbym"/><path class="zj2p4py0y"/><path class="kb42jzcum"/><path class="beul8bqqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-cog-linear"} {...others} />);
}

export default Component;
