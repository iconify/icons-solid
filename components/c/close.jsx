import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-wvdac9s.css';
import '../../css/v/v8kswkbtl.css';
import '../../css/b/by1oxybrb.css';
import '../../css/n/n54cp5b_s.css';
import '../../css/u/u5pae2bdk.css';
import '../../css/u/ufwenlb0a.css';
import '../../css/p/p3rsptbbz.css';
import '../../css/b/blxm5vbxa.css';
import '../../css/v/vfmjsd6nr.css';
import '../../css/u/uxf6ibcdq.css';
import '../../css/y/yf3px3orr.css';
import '../../css/z/zghezp7ik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j-wvdac9s wm-shadow"/><path class="v8kswkbtl"/><path class="by1oxybrb"/><path class="n54cp5b_s"/><path class="u5pae2bdk"/><path class="ufwenlb0a"/><path class="p3rsptbbz"/><path class="blxm5vbxa"/><path class="vfmjsd6nr"/><path class="uxf6ibcdq"/><path class="wm-shine yf3px3orr"/><path class="wm-shine zghezp7ik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:close"} {...others} />);
}

export default Component;
