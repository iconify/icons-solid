import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vy28cyx9v.css';
import '../../css/s/st1-3c4aa.css';
import '../../css/e/e2b3azt4u.css';
import '../../css/x/xuip9tb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vy28cyx9v"/><path class="st1-3c4aa"/><path class="e2b3azt4u"/><path class="xuip9tb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:condicioner-2-broken"} {...others} />);
}

export default Component;
