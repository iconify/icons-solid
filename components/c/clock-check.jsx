import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/z18-4ac4k.css';
import '../../css/y/ym5aw-_ji.css';
import '../../css/h/hiib8cblo.css';
import '../../css/t/tnproubci.css';
import '../../css/o/o4qcvk6jo.css';
import '../../css/n/nvpkei3lv.css';
import '../../css/k/k0uq59bun.css';
import '../../css/m/mwbf3sbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDgqDdcJK" x1="9" x2="15" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="wm-s z18-4ac4k"/><path fill="url(#SVGDgqDdcJK)" class="ym5aw-_ji"/><path class="hiib8cblo wm-s"/><path class="tnproubci wm-shine"/><path class="o4qcvk6jo wm-shine"/><path class="nvpkei3lv wm-shine"/><path class="k0uq59bun wm-shine"/><path class="mwbf3sbgu wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:clock-check"} {...others} />);
}

export default Component;
