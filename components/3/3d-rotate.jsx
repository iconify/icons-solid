import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mhks76b_b.css';
import '../../css/g/gcvor9ish.css';
import '../../css/k/ke-lvtb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="mhks76b_b"/><path class="gcvor9ish"/><path class="ke-lvtb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:3d-rotate"} {...others} />);
}

export default Component;
