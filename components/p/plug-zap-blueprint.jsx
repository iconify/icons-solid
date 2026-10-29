import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aa851r6iu.css';
import '../../css/l/lt5acxb6n.css';
import '../../css/s/swpor7bej.css';
import '../../css/q/q074rbb4d.css';
import '../../css/r/r-bvrrmos.css';
import '../../css/z/z3h0y22gm.css';
import '../../css/h/hhhr-zh0v.css';
import '../../css/y/y2gli9bvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="aa851r6iu wm-deco"/><path class="lt5acxb6n wm-deco"/><path class="swpor7bej wm-deco"/><path class="q074rbb4d wm-k"/><path class="r-bvrrmos wm-a"/><path class="wm-s z3h0y22gm"/><path class="hhhr-zh0v wm-a"/><path class="wm-s y2gli9bvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plug-zap-blueprint"} {...others} />);
}

export default Component;
