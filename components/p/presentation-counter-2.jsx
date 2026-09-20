import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zzb-8ov-o.css';
import '../../css/v/vonc973_t.css';
import '../../css/w/wdgwbabkc.css';
import '../../css/n/nv1_vabel.css';
import '../../css/l/lfehfnbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zzb-8ov-o"/><path class="vonc973_t"/><path class="wdgwbabkc"/><path class="nv1_vabel"/><path class="lfehfnbmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:presentation-counter-2"} {...others} />);
}

export default Component;
