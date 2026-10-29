import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/plvxe05_h.css';
import '../../css/b/bvd4lx2vz.css';
import '../../css/i/iyadbio8g.css';
import '../../css/t/tw12xp0-e.css';
import '../../css/u/u5k-jlbkg.css';
import '../../css/c/c_t-sjbku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="plvxe05_h wm-deco"/><path class="bvd4lx2vz wm-deco"/><path class="iyadbio8g wm-deco"/><path class="tw12xp0-e wm-k"/><path class="u5k-jlbkg wm-a"/><path class="c_t-sjbku wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gingerbread-man-blueprint"} {...others} />);
}

export default Component;
