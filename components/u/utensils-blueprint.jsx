import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e19faacjb.css';
import '../../css/s/s45x-eokh.css';
import '../../css/t/t218te2ox.css';
import '../../css/t/tuzd-32_l.css';
import '../../css/a/a-nm0etpn.css';
import '../../css/v/vc-9k6ymt.css';
import '../../css/p/p2i79xb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e19faacjb wm-deco"/><path class="s45x-eokh wm-deco"/><path class="t218te2ox wm-deco"/><path class="tuzd-32_l wm-k"/><path class="a-nm0etpn wm-a"/><path class="vc-9k6ymt wm-k"/><path class="p2i79xb9w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:utensils-blueprint"} {...others} />);
}

export default Component;
