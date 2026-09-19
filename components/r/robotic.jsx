import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h9vmlxbqb.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/q/qbn5btbhs.css';
import '../../css/q/qd0cyf8vz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h9vmlxbqb"/><path class="r4f-rbb3p"/><path class="qbn5btbhs"/><path class="qd0cyf8vz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:robotic"} {...others} />);
}

export default Component;
