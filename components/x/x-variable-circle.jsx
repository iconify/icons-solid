import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v5qcs8bop.css';
import '../../css/l/lr18s1wgn.css';
import '../../css/d/dawcsab1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v5qcs8bop"/><path class="lr18s1wgn"/><path class="dawcsab1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:x-variable-circle"} {...others} />);
}

export default Component;
