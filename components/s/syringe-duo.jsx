import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r3x4w_hdr.css';
import '../../css/v/vnevullnp.css';
import '../../css/a/ab3ysvbhr.css';
import '../../css/m/mhmuqibqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r3x4w_hdr"/><path class="vnevullnp wm-a"/><path class="ab3ysvbhr"/><path class="mhmuqibqp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:syringe-duo"} {...others} />);
}

export default Component;
