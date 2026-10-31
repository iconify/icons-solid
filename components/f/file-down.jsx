import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/ufdelhb-r.css';
import '../../css/o/ocgy5cd9a.css';
import '../../css/a/aa1xqebuf.css';
import '../../css/f/f6dwpzbsj.css';
import '../../css/p/p4wf35bfw.css';
import '../../css/q/q3yprd-wj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="ufdelhb-r"/><path class="ocgy5cd9a wm-shine"/><path class="aa1xqebuf wm-shine"/><path class="f6dwpzbsj wm-shine"/><path class="p4wf35bfw wm-shine"/><path class="q3yprd-wj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:file-down"} {...others} />);
}

export default Component;
