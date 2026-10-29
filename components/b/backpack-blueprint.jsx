import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dyro-s9kb.css';
import '../../css/m/mw1w22btj.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/p/p3rqpjb7l.css';
import '../../css/r/r84p9ezvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dyro-s9kb wm-deco"/><path class="mw1w22btj wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="p3rqpjb7l wm-k"/><path class="r84p9ezvo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:backpack-blueprint"} {...others} />);
}

export default Component;
