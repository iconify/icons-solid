import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfqrbxa9s.css';
import '../../css/d/dg_7vuimk.css';
import '../../css/s/sa-k73f8j.css';
import '../../css/u/ubypwjb2e.css';
import '../../css/c/ce55spyep.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nfqrbxa9s"/><path class="dg_7vuimk"/><path class="sa-k73f8j"/><path class="ubypwjb2e"/><path class="ce55spyep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:alarm-clock"} {...others} />);
}

export default Component;
