import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dpqcv84wu.css';
import '../../css/w/w6vt9xnjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="dpqcv84wu"/><path class="w6vt9xnjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:signal-sharp"} {...others} />);
}

export default Component;
