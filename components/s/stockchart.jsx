import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt_l_wkmq.css';
import '../../css/s/s_rh6-bjn.css';
import '../../css/r/rfmo84bve.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dt_l_wkmq"/><path class="s_rh6-bjn"/><path class="rfmo84bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:stockchart"} {...others} />);
}

export default Component;
