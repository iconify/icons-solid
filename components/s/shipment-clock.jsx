import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-aqiqbze.css';
import '../../css/r/rdzk0043f.css';
import '../../css/j/jnropfb7n.css';
import '../../css/n/nueo4d8or.css';
import '../../css/a/as82vxb4s.css';
import '../../css/o/op100kbpi.css';
import '../../css/y/yr81w4bdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v-aqiqbze"/><path class="rdzk0043f"/><path class="jnropfb7n"/><path class="nueo4d8or"/><path class="as82vxb4s"/><path class="op100kbpi"/><path class="yr81w4bdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-clock"} {...others} />);
}

export default Component;
