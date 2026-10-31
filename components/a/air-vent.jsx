import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t-w_wrblx.css';
import '../../css/k/kmangubhn.css';
import '../../css/j/j1_apjast.css';
import '../../css/g/gn83_cb7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="t-w_wrblx"/><path class="kmangubhn wm-shine"/><path class="j1_apjast wm-k"/><path class="gn83_cb7i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:air-vent"} {...others} />);
}

export default Component;
