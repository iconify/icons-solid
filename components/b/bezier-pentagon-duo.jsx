import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0_xakbmh.css';
import '../../css/q/ql9y2wmyd.css';
import '../../css/i/i0rty6q2k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k0_xakbmh"/><path class="ql9y2wmyd"/><path class="i0rty6q2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bezier-pentagon-duo"} {...others} />);
}

export default Component;
