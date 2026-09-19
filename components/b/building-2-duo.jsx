import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ld4pzsb1u.css';
import '../../css/n/n-b16tn_b.css';
import '../../css/k/k5759bbnk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ld4pzsb1u"/><path class="n-b16tn_b"/><path class="k5759bbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-2-duo"} {...others} />);
}

export default Component;
