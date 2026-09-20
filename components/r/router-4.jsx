import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k_g84_t5t.css';
import '../../css/v/vwh3d0bgz.css';
import '../../css/k/kob93y2la.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="k_g84_t5t"/><path class="vwh3d0bgz"/><path class="kob93y2la"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:router-4"} {...others} />);
}

export default Component;
