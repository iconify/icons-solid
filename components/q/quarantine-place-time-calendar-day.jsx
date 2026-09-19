import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d_1ye01hx.css';
import '../../css/f/ftkinpb2n.css';
import '../../css/k/kl1a29hva.css';
import '../../css/o/o0sb5acud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="d_1ye01hx"/><path class="ftkinpb2n"/><path class="kl1a29hva"/><path class="o0sb5acud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:quarantine-place-time-calendar-day"} {...others} />);
}

export default Component;
