import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/itd_mgbay.css';
import '../../css/z/zklq9-b5n.css';
import '../../css/h/hn-7-gxmc.css';
import '../../css/z/z11cu140c.css';
import '../../css/g/g2sik5moa.css';
import '../../css/w/we4z7ebtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="itd_mgbay wm-deco"/><path class="wm-deco zklq9-b5n"/><path class="hn-7-gxmc wm-deco"/><path class="wm-k z11cu140c"/><path class="g2sik5moa wm-a"/><path class="we4z7ebtz wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pichkari-blueprint"} {...others} />);
}

export default Component;
