import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5_fqnb0s.css';
import '../../css/s/stui2mbih.css';
import '../../css/z/z4y60jbap.css';
import '../../css/k/k4z5qfbck.css';
import '../../css/a/ajjfjybne.css';
import '../../css/q/q420lfbmh.css';
import '../../css/i/i1scy44pc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjR6wheww" x1="1.96" x2="13.01" y1="1.52" y2="20.69" gradientUnits="userSpaceOnUse"><stop offset="0" class="p5_fqnb0s"/><stop offset=".42" class="stui2mbih"/><stop offset=".58" class="z4y60jbap"/><stop offset="1" class="k4z5qfbck"/></linearGradient></defs><path class="ajjfjybne"/><path class="q420lfbmh wm-s"/><path fill="url(#SVGjR6wheww)" class="i1scy44pc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:poinsettia"} {...others} />);
}

export default Component;
