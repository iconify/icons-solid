import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7wa49b_l.css';
import '../../css/d/drav6dvkt.css';
import '../../css/n/ntg7vub1y.css';
import '../../css/y/yhds7sbse.css';
import '../../css/l/ldg-4ze5w.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="c7wa49b_l"/><path class="drav6dvkt"/><path class="ntg7vub1y"/><path class="yhds7sbse"/><path class="ldg-4ze5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:pa"} {...others} />);
}

export default Component;
