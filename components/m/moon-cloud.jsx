import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lju75tbjv.css';
import '../../css/f/f5rpebc0l.css';
import '../../css/z/zt0nc9_gk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lju75tbjv"/><path class="f5rpebc0l"/><path class="zt0nc9_gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:moon-cloud"} {...others} />);
}

export default Component;
