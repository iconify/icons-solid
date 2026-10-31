import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/nh_aeux5t.css';
import '../../css/c/cckk64--m.css';
import '../../css/y/y3h7f0b4u.css';
import '../../css/d/ds-ucjbzp.css';
import '../../css/x/x1dmyxb3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGzpqHrN7g" x1="9" x2="15" y1="2.52" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGzpqHrN7g)" class="nh_aeux5t"/><path class="cckk64--m wm-a"/><path class="wm-shine y3h7f0b4u"/><path class="ds-ucjbzp wm-shine"/><path class="wm-shine x1dmyxb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:chart-area"} {...others} />);
}

export default Component;
