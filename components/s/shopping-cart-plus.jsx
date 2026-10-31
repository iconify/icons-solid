import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pfcvzdukj.css';
import '../../css/x/x6ux5_qbx.css';
import '../../css/g/g_fatobrl.css';
import '../../css/t/tontm0bys.css';
import '../../css/k/kyhjrk6uv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pfcvzdukj wm-shadow"/><path class="x6ux5_qbx"/><path class="g_fatobrl"/><path class="tontm0bys"/><path class="kyhjrk6uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shopping-cart-plus"} {...others} />);
}

export default Component;
