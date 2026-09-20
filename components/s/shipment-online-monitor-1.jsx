import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-cvqtbtx.css';
import '../../css/x/xesn6_b1l.css';
import '../../css/i/i246_zocj.css';
import '../../css/v/vchwkib6x.css';
import '../../css/l/lg5fjbbml.css';
import '../../css/w/w947993ak.css';
import '../../css/c/c_n1zi3hu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s-cvqtbtx"/><path class="xesn6_b1l"/><path class="i246_zocj"/><path class="vchwkib6x"/><path class="lg5fjbbml"/><path class="w947993ak"/><path class="c_n1zi3hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-online-monitor-1"} {...others} />);
}

export default Component;
