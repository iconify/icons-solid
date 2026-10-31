import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g17dkubet.css';
import '../../css/r/r3l-ombim.css';
import '../../css/t/t4dredm1h.css';
import '../../css/b/b5089wbcr.css';
import '../../css/y/ya-xp3btk.css';
import '../../css/p/psdddnbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g17dkubet wm-k"/><path class="r3l-ombim wm-deco"/><path class="t4dredm1h wm-k"/><path class="b5089wbcr wm-shadow"/><path class="wm-shine ya-xp3btk"/><path class="psdddnbdb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:basketball"} {...others} />);
}

export default Component;
