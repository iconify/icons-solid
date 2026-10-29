import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ik4di1b3c.css';
import '../../css/k/ko6l_j2-e.css';
import '../../css/o/omcg6zbpi.css';
import '../../css/g/g0uz7wbvx.css';
import '../../css/p/pgfuf2bqs.css';
import '../../css/c/ciu8v726o.css';
import '../../css/y/ylfnh6bls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ik4di1b3c"/><path class="ko6l_j2-e wm-k"/><path class="omcg6zbpi wm-a"/><path class="g0uz7wbvx wm-s"/><path class="pgfuf2bqs wm-k"/><path class="ciu8v726o wm-a"/><path class="wm-s ylfnh6bls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clock-check-sketch"} {...others} />);
}

export default Component;
