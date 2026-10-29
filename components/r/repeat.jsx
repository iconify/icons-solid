import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_h2blnbf.css';
import '../../css/m/mx0hxbois.css';
import '../../css/y/y07ft7bnl.css';
import '../../css/h/hwf-m1bzt.css';
import '../../css/z/zy7c6fkpz.css';
import '../../css/q/qgqq8fblv.css';
import '../../css/n/nxr1y1pvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_h2blnbf wm-shadow"/><path class="mx0hxbois wm-k"/><path class="wm-k y07ft7bnl"/><path class="hwf-m1bzt wm-k"/><path class="wm-k zy7c6fkpz"/><path class="qgqq8fblv wm-k"/><path class="nxr1y1pvc wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:repeat"} {...others} />);
}

export default Component;
