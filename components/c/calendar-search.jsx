import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fqdl4lonl.css';
import '../../css/e/e2nl3abkg.css';
import '../../css/l/l3cl4gb5n.css';
import '../../css/v/v5ys71b3o.css';
import '../../css/l/lr7x1whld.css';
import '../../css/t/taw5cmevr.css';
import '../../css/p/p5g0wxbxv.css';
import '../../css/b/beu5i1b_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fqdl4lonl wm-shadow"/><path class="e2nl3abkg wm-s"/><path class="l3cl4gb5n wm-shadow"/><path class="v5ys71b3o"/><path class="lr7x1whld"/><path class="taw5cmevr wm-s"/><path class="p5g0wxbxv wm-s"/><path class="beu5i1b_m wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:calendar-search"} {...others} />);
}

export default Component;
