import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d_9_i96hn.css';
import '../../css/q/q8aan8bww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d_9_i96hn"/><path class="q8aan8bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wifi-location"} {...others} />);
}

export default Component;
