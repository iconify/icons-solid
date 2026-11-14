import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao328ib6p.css';
import '../../css/d/dgn65lb1h.css';
import '../../css/t/tl_x59b9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ao328ib6p"/><path class="dgn65lb1h"/><path class="tl_x59b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-01"} {...others} />);
}

export default Component;
