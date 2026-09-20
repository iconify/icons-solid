import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/or_kujb0j.css';
import '../../css/w/wpoa2_b5l.css';
import '../../css/r/rhh497bzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="or_kujb0j"/><path class="wpoa2_b5l"/><path class="rhh497bzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-online-monitor-1"} {...others} />);
}

export default Component;
