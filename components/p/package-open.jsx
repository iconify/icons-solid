import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/o3icmpbei.css';
import '../../css/p/pm7mc66iy.css';
import '../../css/a/a00ll1lkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyxId7bgf" x1="9.01" x2="15.01" y1="1.51" y2="22.15" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyxId7bgf)" class="o3icmpbei"/><path class="pm7mc66iy wm-a"/><path class="a00ll1lkf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:package-open"} {...others} />);
}

export default Component;
