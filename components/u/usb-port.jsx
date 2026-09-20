import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtzhfab_b.css';
import '../../css/v/vac3o6buu.css';
import '../../css/l/loh_jjy_t.css';
import '../../css/x/xyrvogb6c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rtzhfab_b"/><path class="vac3o6buu"/><path class="loh_jjy_t"/><path class="xyrvogb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:usb-port"} {...others} />);
}

export default Component;
