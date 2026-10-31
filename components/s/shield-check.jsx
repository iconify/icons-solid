import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/z1ciapysc.css';
import '../../css/r/rghg8cbsq.css';
import '../../css/n/nm122tbnn.css';
import '../../css/g/gs66p77ly.css';
import '../../css/r/rhqe81nqt.css';
import '../../css/e/ect927bmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRlhuzCkJ" x1="9" x2="15" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRlhuzCkJ)" class="z1ciapysc"/><path class="rghg8cbsq wm-shine"/><path class="nm122tbnn wm-shine"/><path class="gs66p77ly wm-shine"/><path class="rhqe81nqt wm-shine"/><path class="ect927bmu wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:shield-check"} {...others} />);
}

export default Component;
