import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/ckfdgzbik.css';
import '../../css/v/vy_pq3h9h.css';
import '../../css/a/am7y9lzyp.css';
import '../../css/b/bmliitbpy.css';
import '../../css/s/smjgj4i1u.css';
import '../../css/w/wknf9cbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGpKpNZc4v" x1="9" x2="15" y1="2" y2="21.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGpKpNZc4v)" class="ckfdgzbik"/><path class="vy_pq3h9h wm-shine"/><path class="am7y9lzyp wm-shine"/><path class="bmliitbpy wm-shine"/><path class="smjgj4i1u wm-shine"/><path class="wknf9cbrq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:sticky-note"} {...others} />);
}

export default Component;
