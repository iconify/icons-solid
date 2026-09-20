import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lpbby968v.css';
import '../../css/v/vs3v465nz.css';
import '../../css/e/e1nk3pf1p.css';
import '../../css/h/hj54-kbnv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lpbby968v"/><path class="vs3v465nz"/><path class="e1nk3pf1p"/><path class="hj54-kbnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:surveillance-camera"} {...others} />);
}

export default Component;
