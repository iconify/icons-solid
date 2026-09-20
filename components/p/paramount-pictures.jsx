import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r1rw3ebtz.css';
import '../../css/t/tv_yskb7s.css';
import '../../css/f/f5fofrb1y.css';
import '../../css/s/st-f1nb8l.css';
import '../../css/w/wglbvtb9q.css';

const viewBox = {"width":192.756,"height":192.756};
const content = `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="r1rw3ebtz"/><path class="tv_yskb7s"/><path class="f5fofrb1y"/><path class="st-f1nb8l"/><path class="wglbvtb9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:paramount-pictures"} {...others} />);
}

export default Component;
