import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/akajwubis.css';
import '../../css/y/yepmwko9k.css';
import '../../css/r/r8p08nb8h.css';
import '../../css/x/xzzb1ne8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="akajwubis"/><path class="yepmwko9k"/><path class="r8p08nb8h"/><path class="xzzb1ne8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wifi-info-sharp-two-tone"} {...others} />);
}

export default Component;
