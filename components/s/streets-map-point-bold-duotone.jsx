import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-2fhubal.css';
import '../../css/n/n6lshjbtf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/ktlliubjd.css';
import '../../css/w/wl85dh_jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e-2fhubal"/><path class="n6lshjbtf"/><g class="xtpeb-edw"><path class="ktlliubjd"/><path class="wl85dh_jk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-map-point-bold-duotone"} {...others} />);
}

export default Component;
