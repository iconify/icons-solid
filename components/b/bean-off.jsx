import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3furptaz.css';
import '../../css/v/vv0lv1y-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q3furptaz"/><path class="vv0lv1y-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bean-off"} {...others} />);
}

export default Component;
