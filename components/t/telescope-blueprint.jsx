import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mgbuli8ld.css';
import '../../css/z/zudynuado.css';
import '../../css/m/mbghn_21q.css';
import '../../css/d/dxsapjb1k.css';
import '../../css/d/da6a3-mpd.css';
import '../../css/d/d0yfznbcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="mgbuli8ld wm-deco"/><path class="wm-deco zudynuado"/><path class="mbghn_21q wm-deco"/><path class="dxsapjb1k wm-k"/><path class="da6a3-mpd wm-a"/><path class="d0yfznbcg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:telescope-blueprint"} {...others} />);
}

export default Component;
