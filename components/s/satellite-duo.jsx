import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/scdwi_bys.css';
import '../../css/r/ra5--iqdi.css';
import '../../css/p/pa-aaynvi.css';
import '../../css/k/kydla-v8g.css';
import '../../css/t/twlqflbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="scdwi_bys"/><path class="ra5--iqdi wm-a"/><path class="pa-aaynvi wm-s"/><path class="kydla-v8g"/><path class="twlqflbgi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-duo"} {...others} />);
}

export default Component;
