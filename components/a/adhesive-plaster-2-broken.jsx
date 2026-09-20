import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v2rcy-bxg.css';
import '../../css/s/swsqpom4y.css';
import '../../css/p/phctv_brq.css';
import '../../css/l/lii0jv5qd.css';
import '../../css/z/zobqt3-km.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v2rcy-bxg"/><path class="swsqpom4y"/><path class="phctv_brq"/><path class="lii0jv5qd"/><path class="zobqt3-km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-2-broken"} {...others} />);
}

export default Component;
