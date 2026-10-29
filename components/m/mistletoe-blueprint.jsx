import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w7qymhfop.css';
import '../../css/f/f-cgamvit.css';
import '../../css/s/sz_rsbcxf.css';
import '../../css/m/mxl60llyt.css';
import '../../css/n/n_kan2bin.css';
import '../../css/p/pjglwlb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="w7qymhfop wm-deco"/><path class="f-cgamvit wm-deco"/><path class="sz_rsbcxf wm-k"/><path class="mxl60llyt wm-a"/><path class="n_kan2bin wm-s"/><path class="pjglwlb-a wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mistletoe-blueprint"} {...others} />);
}

export default Component;
