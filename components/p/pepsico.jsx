import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cyop8h_1x.css';
import '../../css/n/npsp7dbgr.css';
import '../../css/q/qgl87_41t.css';
import '../../css/n/nziz46buo.css';
import '../../css/j/j6xcb2t7v.css';

const viewBox = {"width":576.113,"height":132.965,"left":7.095,"top":15.518};
const content = `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="cyop8h_1x"/><path class="npsp7dbgr"/><path class="qgl87_41t"/><path class="nziz46buo"/><path class="j6xcb2t7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pepsico"} {...others} />);
}

export default Component;
