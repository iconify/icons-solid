import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vqm0_dtme.css';
import '../../css/c/ciss-jbrv.css';
import '../../css/f/fe1ld0bgr.css';
import '../../css/f/fltmthbdi.css';
import '../../css/m/mnqpjmj2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="vqm0_dtme"/><path class="ciss-jbrv"/><path class="fe1ld0bgr"/><path class="fltmthbdi"/><path class="mnqpjmj2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:crosshair"} {...others} />);
}

export default Component;
