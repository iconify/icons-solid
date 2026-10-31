import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gnc46-bhz.css';
import '../../css/w/wqqoylfgz.css';
import '../../css/l/lfbqafbuk.css';
import '../../css/v/v4gxtlbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGTaSO5bem" x1="9" x2="15" y1="2.64" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGTaSO5bem)" class="gnc46-bhz"/><path class="wm-shine wqqoylfgz"/><path class="lfbqafbuk wm-shine"/><path class="v4gxtlbta wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:sandwich"} {...others} />);
}

export default Component;
