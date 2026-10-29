import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crgmmtbfl.css';
import '../../css/d/dd7gu2b7j.css';
import '../../css/k/kcr69ybxy.css';
import '../../css/n/nnlf9e_vj.css';
import '../../css/u/u-0ipwb4l.css';
import '../../css/g/gxmzqlbcq.css';
import '../../css/e/ed5gttbbq.css';
import '../../css/m/mx_28dmdm.css';
import '../../css/f/f_rxedc0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="crgmmtbfl wm-shadow"/><path class="dd7gu2b7j wm-shadow"/><path class="kcr69ybxy"/><path class="nnlf9e_vj"/><path class="u-0ipwb4l"/><path class="gxmzqlbcq"/><path class="ed5gttbbq wm-shine"/><path class="mx_28dmdm wm-shine"/><path class="f_rxedc0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:arrow-down-right"} {...others} />);
}

export default Component;
