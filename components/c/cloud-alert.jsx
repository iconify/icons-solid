import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qw__uzb2x.css';
import '../../css/g/gnzq8-bnd.css';
import '../../css/u/uymbjfbxs.css';
import '../../css/q/qmo_onbfh.css';
import '../../css/f/fsceomx5k.css';
import '../../css/l/lb75uptqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjJ7zFdpW" x1="9.04" x2="15.04" y1="4.88" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGjJ7zFdpW)" class="qw__uzb2x"/><path class="gnzq8-bnd wm-shine"/><path class="uymbjfbxs wm-shine"/><path class="qmo_onbfh wm-shine"/><path class="fsceomx5k wm-shine"/><path class="lb75uptqa wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:cloud-alert"} {...others} />);
}

export default Component;
