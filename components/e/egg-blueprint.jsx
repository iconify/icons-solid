import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eoyw7hy5h.css';
import '../../css/a/a92mxccrf.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/o/o31m35bod.css';
import '../../css/t/t_iyb2b1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="eoyw7hy5h wm-deco"/><path class="a92mxccrf wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="o31m35bod wm-k"/><path class="t_iyb2b1h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:egg-blueprint"} {...others} />);
}

export default Component;
