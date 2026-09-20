import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnxi2rbnm.css';
import '../../css/g/g_knt3b7l.css';
import '../../css/k/kp0ka7hxu.css';
import '../../css/y/y-v_afx5y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><g class="wnxi2rbnm"><path clip-rule="evenodd" class="g_knt3b7l"/><path class="kp0ka7hxu"/></g><path clip-rule="evenodd" class="y-v_afx5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:airport-security-flat"} {...others} />);
}

export default Component;
