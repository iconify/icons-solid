import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mg7aqnbsf.css';
import '../../css/i/i8979pb_i.css';
import '../../css/m/m0f9xo_pb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mg7aqnbsf"/><rect transform="rotate(-90 6 20)" class="i8979pb_i"/><rect transform="rotate(-90 14 16)" class="m0f9xo_pb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:align-top"} {...others} />);
}

export default Component;
