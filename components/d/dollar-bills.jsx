import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dlfsdvbll.css';
import '../../css/y/yuhc8jo4x.css';
import '../../css/x/xmr7rhb3p.css';
import '../../css/u/uo9rxdr_l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="dlfsdvbll"/><path class="yuhc8jo4x"/><path clip-rule="evenodd" class="xmr7rhb3p"/><path class="uo9rxdr_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:dollar-bills"} {...others} />);
}

export default Component;
