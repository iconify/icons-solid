import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ynh320vat.css';
import '../../css/b/ba5x8cdcw.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/ktlliubjd.css';
import '../../css/w/wl85dh_jk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ynh320vat"/><path class="ba5x8cdcw"/><g class="mc2zb0bvp"><path class="ktlliubjd"/><path class="wl85dh_jk"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-map-point-bold-duotone"} {...others} />);
}

export default Component;
