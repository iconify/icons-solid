import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xr14t48pc.css';
import '../../css/w/wmx-00bdf.css';
import '../../css/n/n2_r2ubps.css';
import '../../css/o/okp7pp4nk.css';
import '../../css/s/sxwvjhaxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xr14t48pc"/><path class="wm-deco wmx-00bdf"/><path class="n2_r2ubps wm-k"/><path class="okp7pp4nk wm-s"/><path class="sxwvjhaxj wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-minus-blueprint"} {...others} />);
}

export default Component;
