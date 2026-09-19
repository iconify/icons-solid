import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o_m5rgb_q.css';
import '../../css/f/fg12iorsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o_m5rgb_q"/><path class="fg12iorsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:skipping-rope"} {...others} />);
}

export default Component;
