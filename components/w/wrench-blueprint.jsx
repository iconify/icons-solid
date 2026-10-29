import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z12vwrbxv.css';
import '../../css/q/qtv_cddoq.css';
import '../../css/y/yrrgw6qvv.css';
import '../../css/h/hi4mwm5qt.css';
import '../../css/h/hup0fn6ni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco z12vwrbxv"/><path class="qtv_cddoq wm-deco"/><path class="wm-deco yrrgw6qvv"/><path class="hi4mwm5qt"/><path class="hup0fn6ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wrench-blueprint"} {...others} />);
}

export default Component;
