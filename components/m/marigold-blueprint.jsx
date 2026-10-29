import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q4uvtbuiq.css';
import '../../css/w/w88s1ac1i.css';
import '../../css/b/b53s4jezg.css';
import '../../css/q/qzce7cxmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="q4uvtbuiq wm-deco"/><path class="w88s1ac1i wm-deco"/><path class="b53s4jezg wm-k"/><path class="qzce7cxmc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:marigold-blueprint"} {...others} />);
}

export default Component;
