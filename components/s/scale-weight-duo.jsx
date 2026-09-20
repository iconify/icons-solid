import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvfectegd.css';
import '../../css/u/un__2s_sa.css';
import '../../css/w/wk4_54bmt.css';
import '../../css/n/ny_efzbcr.css';
import '../../css/w/wmn_wg91v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fvfectegd"/><path class="un__2s_sa"/><path class="wk4_54bmt"/><path class="ny_efzbcr"/><path class="wmn_wg91v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:scale-weight-duo"} {...others} />);
}

export default Component;
