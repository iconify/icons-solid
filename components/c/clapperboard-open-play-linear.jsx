import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6fn0fb1j.css';
import '../../css/h/htd9n0b_o.css';
import '../../css/q/qgxak08we.css';
import '../../css/e/ezgo-k8an.css';
import '../../css/m/m5-wz0b2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l6fn0fb1j"/><path class="htd9n0b_o"/><path class="qgxak08we"/><path class="ezgo-k8an"/><path class="m5-wz0b2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-play-linear"} {...others} />);
}

export default Component;
