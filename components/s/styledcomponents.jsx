import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex-9i5bwz.css';
import '../../css/c/c4iuujwsk.css';
import '../../css/g/ghnm1-83v.css';
import '../../css/d/dbhzzibgo.css';
import '../../css/d/djenvfbpg.css';
import '../../css/n/ng2egbbcg.css';
import '../../css/h/hyp8s4c6w.css';
import '../../css/l/lvtwnwh-i.css';
import '../../css/a/aytxj8qqx.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect fill="url(#SVGRePGjdbj)" class="ex-9i5bwz"/><path class="c4iuujwsk"/><path clip-rule="evenodd" class="ghnm1-83v"/><path clip-rule="evenodd" class="dbhzzibgo"/><path clip-rule="evenodd" class="djenvfbpg"/><path clip-rule="evenodd" class="ng2egbbcg"/><path clip-rule="evenodd" class="hyp8s4c6w"/><defs><linearGradient id="SVGRePGjdbj" x1="0" x2="256" y1="256" y2="0" gradientUnits="userSpaceOnUse"><stop class="lvtwnwh-i"/><stop offset="1" class="aytxj8qqx"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:styledcomponents"} {...others} />);
}

export default Component;
