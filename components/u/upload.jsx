import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zol77mb3h.css';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eb74qu_lk.css';
import '../../css/a/acm4xu9sj.css';
import '../../css/p/p1a0zztoq.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="SVGHdefabht" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="zol77mb3h"/></mask><g mask="url(#SVGHdefabht)" class="rggfaqb6e"><path class="eb74qu_lk"/><path class="acm4xu9sj"/><path class="p1a0zztoq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:upload"} {...others} />);
}

export default Component;
