import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvh1lcclm.css';
import '../../css/e/e5agjjb8u.css';
import '../../css/l/liqdkkw1e.css';
import '../../css/m/mn1pwkb1p.css';
import '../../css/b/bkfooxxdk.css';
import '../../css/h/h0d-1qbqk.css';
import '../../css/j/j2z-oi_bm.css';
import '../../css/m/m7bjg5bjb.css';
import '../../css/h/hpzy61big.css';
import '../../css/c/c_fljub8y.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="fvh1lcclm"/><path class="e5agjjb8u"/><path class="liqdkkw1e"/><path class="mn1pwkb1p"/><path class="bkfooxxdk"/><path class="h0d-1qbqk"/><path class="j2z-oi_bm"/><path class="m7bjg5bjb"/><circle class="hpzy61big"/><path class="c_fljub8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:juce"} {...others} />);
}

export default Component;
