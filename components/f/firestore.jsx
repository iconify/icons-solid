import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xr299vbby.css';
import '../../css/q/q6oxmbcor.css';
import '../../css/g/gk0pw4mmu.css';
import '../../css/e/eq4wmjobg.css';
import '../../css/j/jjs-4gxfm.css';
import '../../css/r/rpxnu_t7x.css';

const viewBox = {"width":224.984,"height":250};
const content = `<g class="ft5dv1b6b"><path class="xr299vbby"/><defs><linearGradient id="SVGA9YRuemK"><stop offset="0" class="q6oxmbcor"/><stop offset=".999" class="q6oxmbcor"/></linearGradient><linearGradient id="SVGBIdbNc4u" x1="249.955" x2="362.484" y1="262.5" y2="262.5" gradientTransform="translate(-137.5 -125)" gradientUnits="userSpaceOnUse" href="#SVGA9YRuemK"/></defs><path fill="url(#SVGBIdbNc4u)" class="gk0pw4mmu"/><path class="eq4wmjobg"/><path class="jjs-4gxfm"/><path class="rpxnu_t7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:firestore"} {...others} />);
}

export default Component;
