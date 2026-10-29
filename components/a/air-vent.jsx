import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgmfzls_y.css';
import '../../css/s/snsip2zdh.css';
import '../../css/x/xvxrnvbin.css';
import '../../css/m/m8df_r6cm.css';
import '../../css/x/xizpwqb6k.css';
import '../../css/k/kvjao-b1z.css';
import '../../css/t/tut5ejbss.css';
import '../../css/u/u1v_eaclf.css';
import '../../css/u/u7jf9hb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-a zgmfzls_y"/><path class="snsip2zdh wm-a"/><path class="wm-a xvxrnvbin"/><path class="m8df_r6cm wm-k"/><path class="wm-k xizpwqb6k"/><path class="kvjao-b1z wm-k"/><path class="tut5ejbss wm-k"/><path class="u1v_eaclf wm-shine"/><path class="u7jf9hb4m wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:air-vent"} {...others} />);
}

export default Component;
