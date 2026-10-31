import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l88qm1qag.css';
import '../../css/d/drav6dvkt.css';
import '../../css/v/vu4glqw6p.css';
import '../../css/y/yhds7sbse.css';
import '../../css/v/vs0n0gheb.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="l88qm1qag"/><path class="drav6dvkt"/><path class="vu4glqw6p"/><path class="yhds7sbse"/><path class="vs0n0gheb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:pa"} {...others} />);
}

export default Component;
