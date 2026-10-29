import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iujn64mjt.css';
import '../../css/m/m_pasbhxf.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/y/yzh737bhw.css';
import '../../css/q/q6s4yvbqv.css';
import '../../css/z/z7fuhj0ov.css';
import '../../css/a/albw7qb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="iujn64mjt wm-deco"/><path class="m_pasbhxf wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="wm-k yzh737bhw"/><path class="q6s4yvbqv wm-a"/><path class="wm-k z7fuhj0ov"/><path class="albw7qb1i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-open-blueprint"} {...others} />);
}

export default Component;
