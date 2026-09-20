import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/m/med-e0bmk.css';
import '../../css/r/rwejt42eg.css';
import '../../css/e/epvftoboj.css';
import '../../css/k/kli63yb6u.css';
import '../../css/z/zpo_xlqbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="med-e0bmk"/><path class="rwejt42eg"/><path class="epvftoboj"/><path class="kli63yb6u"/><path class="zpo_xlqbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:petri-dish-lab-equipment"} {...others} />);
}

export default Component;
