import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkjv_urlt.css';
import '../../css/z/zaadntb7f.css';
import '../../css/h/hp14de08b.css';
import '../../css/h/hntlzbclc.css';
import '../../css/u/uxek5lmnk.css';
import '../../css/v/vcfti5uoq.css';
import '../../css/p/prrilwbea.css';
import '../../css/t/tf1ccrzdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dkjv_urlt wm-k"/><path class="wm-a zaadntb7f"/><path class="hp14de08b wm-deco"/><path class="hntlzbclc wm-k"/><path class="uxek5lmnk wm-a"/><path class="vcfti5uoq wm-shadow"/><path class="prrilwbea wm-shine"/><path class="tf1ccrzdr wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:bell"} {...others} />);
}

export default Component;
