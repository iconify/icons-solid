import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/od7x-v3cl.css';
import '../../css/q/qlswt0jgb.css';
import '../../css/w/wmv_g2b0a.css';
import '../../css/s/sob1app1w.css';
import '../../css/q/qcji_nb3a.css';
import '../../css/d/drih6ob2s.css';
import '../../css/d/dbda7jb-a.css';
import '../../css/n/nu5dhcc1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="od7x-v3cl"/><path class="qlswt0jgb"/><path class="wmv_g2b0a"/><path class="sob1app1w"/><path class="qcji_nb3a"/><path class="drih6ob2s"/><path class="dbda7jb-a"/><path class="nu5dhcc1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-2-linear"} {...others} />);
}

export default Component;
