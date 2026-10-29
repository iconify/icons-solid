import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grbhafz7r.css';
import '../../css/f/fxcv_fb4k.css';
import '../../css/m/m8jccibgj.css';
import '../../css/f/fuc0oobux.css';
import '../../css/g/gj0eigbea.css';
import '../../css/f/fii5rg-bc.css';
import '../../css/t/tujuszb4k.css';
import '../../css/k/k8s4kybai.css';
import '../../css/a/alwd_tb1y.css';
import '../../css/k/kbz9edand.css';
import '../../css/x/xzt-i3bsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="grbhafz7r wm-shadow"/><path class="fxcv_fb4k wm-shadow"/><path class="m8jccibgj"/><path class="fuc0oobux"/><path class="gj0eigbea"/><path class="fii5rg-bc"/><path class="tujuszb4k wm-shine"/><path class="k8s4kybai wm-shine"/><path class="alwd_tb1y"/><path class="kbz9edand"/><path class="xzt-i3bsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:scan-text"} {...others} />);
}

export default Component;
