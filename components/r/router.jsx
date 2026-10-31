import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ap2aj3b6f.css';
import '../../css/d/d9-48iz5e.css';
import '../../css/q/q39umkbkp.css';
import '../../css/v/vur_90a6a.css';
import '../../css/u/ufmnewbty.css';
import '../../css/n/n34baccec.css';
import '../../css/m/mnii-4qjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ap2aj3b6f wm-k"/><path class="d9-48iz5e wm-a"/><path class="q39umkbkp wm-deco"/><path class="vur_90a6a wm-k"/><path class="ufmnewbty wm-k"/><path class="n34baccec wm-a"/><path class="mnii-4qjb wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:router"} {...others} />);
}

export default Component;
