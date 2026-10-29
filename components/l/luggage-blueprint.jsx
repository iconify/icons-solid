import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hizp_mtjz.css';
import '../../css/u/ursbocc_c.css';
import '../../css/t/tvxwcob7h.css';
import '../../css/j/j1vumrv1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hizp_mtjz wm-deco"/><path class="ursbocc_c wm-deco"/><path class="tvxwcob7h wm-k"/><path class="j1vumrv1z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:luggage-blueprint"} {...others} />);
}

export default Component;
