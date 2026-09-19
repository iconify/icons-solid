import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rt_j06r0h.css';
import '../../css/k/kqugce9wn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rt_j06r0h"/><path class="kqugce9wn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:structure-add"} {...others} />);
}

export default Component;
