import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_cvnui_l.css';
import '../../css/x/xc5py6b1o.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/x/xowgfxbjw.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGpdiHyWUd)" class="z_cvnui_l"/><path fill="url(#SVGkd30IbjU)" class="xc5py6b1o"/><defs><linearGradient id="SVGpdiHyWUd" x1="4.038" x2="16.501" y1="9.431" y2="4.419" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset=".445" class="bxegrmbjp"/><stop offset=".957" class="xowgfxbjw"/></linearGradient><linearGradient id="SVGkd30IbjU" x1="12.875" x2="2.374" y1="2.75" y2="18.387" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:data-trending-16"} {...others} />);
}

export default Component;
