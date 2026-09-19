import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hrceo_b_n.css';
import '../../css/m/mnzk3bcrc.css';
import '../../css/v/vithtcboi.css';
import '../../css/r/r5-ki1pcy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hrceo_b_n"/><path class="mnzk3bcrc"/><path class="vithtcboi"/><path clip-rule="evenodd" class="r5-ki1pcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:enzyme-outline"} {...others} />);
}

export default Component;
