import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n7zpq9she.css';
import '../../css/r/rpg-511wd.css';
import '../../css/r/rzdv-tbps.css';
import '../../css/o/o2m0gts_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n7zpq9she"/><path class="rpg-511wd wm-k"/><path class="rzdv-tbps wm-k"/><path class="o2m0gts_u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gallery-horizontal-sketch"} {...others} />);
}

export default Component;
