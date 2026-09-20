import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sio6vka1s.css';
import '../../css/t/tyaij6rok.css';
import '../../css/v/vy5waob-q.css';
import '../../css/u/u3xw_g32v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sio6vka1s"/><path class="tyaij6rok"/><path class="vy5waob-q"/><path class="u3xw_g32v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-minimalistic-broken"} {...others} />);
}

export default Component;
