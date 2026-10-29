import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fe7nz5gcb.css';
import '../../css/j/jkxyhhvft.css';
import '../../css/n/nd9n5bcbx.css';
import '../../css/j/j8l49ylks.css';
import '../../css/t/t9f0e3fmu.css';
import '../../css/j/j_5006u1z.css';
import '../../css/v/vrmi09zrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fe7nz5gcb wm-deco"/><path class="jkxyhhvft wm-deco"/><path class="nd9n5bcbx wm-deco"/><path class="j8l49ylks wm-k"/><path class="t9f0e3fmu wm-a"/><path class="j_5006u1z wm-k"/><path class="vrmi09zrt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flag-blueprint"} {...others} />);
}

export default Component;
