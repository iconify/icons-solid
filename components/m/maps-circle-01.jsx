import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9n4_-buy.css';
import '../../css/r/rb7jyciyp.css';
import '../../css/m/mok3xxbso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v9n4_-buy"/><path class="rb7jyciyp"/><path class="mok3xxbso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:maps-circle-01"} {...others} />);
}

export default Component;
