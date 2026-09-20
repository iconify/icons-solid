import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbu_udbmn.css';
import '../../css/x/x2i2qgbmb.css';
import '../../css/p/py0dxib5v.css';
import '../../css/m/myt-e3bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vbu_udbmn"/><path class="x2i2qgbmb"/><path class="py0dxib5v"/><path class="myt-e3bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-trash-outline"} {...others} />);
}

export default Component;
