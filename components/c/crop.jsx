import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/ni70svb6h.css';
import '../../css/d/dyq7rer4u.css';
import '../../css/g/gvixlm8lm.css';
import '../../css/n/nd5fzyb3a.css';
import '../../css/d/dujlioqlr.css';
import '../../css/f/fmfhktm-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGTmEhAwAQ" x1="9" x2="15" y1="1.52" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGTmEhAwAQ)" class="ni70svb6h"/><path class="dyq7rer4u wm-shine"/><path class="gvixlm8lm wm-shine"/><path class="nd5fzyb3a wm-shine"/><path class="dujlioqlr wm-shine"/><path class="fmfhktm-l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:crop"} {...others} />);
}

export default Component;
