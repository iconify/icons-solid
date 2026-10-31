import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnl8pmbik.css';
import '../../css/r/ru4g8o7wa.css';
import '../../css/f/f_rbes20h.css';
import '../../css/q/q8w0cybqh.css';
import '../../css/b/bxznb46tm.css';
import '../../css/e/elzoignsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rnl8pmbik wm-k"/><path class="ru4g8o7wa wm-k"/><path class="f_rbes20h wm-k"/><path class="q8w0cybqh wm-shadow"/><path class="bxznb46tm wm-shine"/><path class="elzoignsa wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:speaker"} {...others} />);
}

export default Component;
