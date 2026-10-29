import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zoz0n8k_i.css';
import '../../css/t/t218te2ox.css';
import '../../css/j/jewyrvbcx.css';
import '../../css/o/ozpciox1z.css';
import '../../css/r/ri3209paw.css';
import '../../css/p/pln6qt_gc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zoz0n8k_i"/><path class="t218te2ox wm-deco"/><path class="jewyrvbcx wm-k"/><path class="ozpciox1z wm-a"/><path class="ri3209paw wm-k"/><path class="pln6qt_gc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:refresh-blueprint"} {...others} />);
}

export default Component;
