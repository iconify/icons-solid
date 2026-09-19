import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ubo2nlb6e.css';
import '../../css/m/mwa5mqb6p.css';
import '../../css/y/yr2f_fpsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ubo2nlb6e"/><circle class="mwa5mqb6p"/><path class="yr2f_fpsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-unlock-01"} {...others} />);
}

export default Component;
