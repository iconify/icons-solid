import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q07v-eb4l.css';
import '../../css/n/nu5ddkbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q07v-eb4l"/><path class="nu5ddkbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pin-house"} {...others} />);
}

export default Component;
