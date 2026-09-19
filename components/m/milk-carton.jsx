import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uwzhl-bnu.css';
import '../../css/i/ia_wf3cdd.css';
import '../../css/v/vclcg2aqe.css';
import '../../css/w/wkxczpbey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uwzhl-bnu"/><path class="ia_wf3cdd"/><path class="vclcg2aqe"/><path class="wkxczpbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:milk-carton"} {...others} />);
}

export default Component;
