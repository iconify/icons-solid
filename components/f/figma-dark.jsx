import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/r/r2n2ivptn.css';
import '../../css/b/bpict8bvb.css';
import '../../css/t/toz_dzbfa.css';
import '../../css/h/hg-ykcblt.css';
import '../../css/d/dnwb3lbwy.css';
import '../../css/l/lxqavy_kf.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><g clip-path="url(#SVGXwgIudex)"><path class="r2n2ivptn"/><path class="bpict8bvb"/><path class="toz_dzbfa"/><path class="hg-ykcblt"/><path class="dnwb3lbwy"/></g><defs><clipPath id="SVGXwgIudex"><path class="lxqavy_kf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:figma-dark"} {...others} />);
}

export default Component;
