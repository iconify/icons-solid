import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v-o7l4fmy.css';
import '../../css/z/zlk-9ccnf.css';
import '../../css/y/yibe7abyl.css';
import '../../css/r/rr42l0b9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v-o7l4fmy"/><path class="zlk-9ccnf"/><path class="yibe7abyl"/><path class="rr42l0b9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubble-tea-01"} {...others} />);
}

export default Component;
