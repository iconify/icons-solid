import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odjw4abrt.css';
import '../../css/m/mtt4-nwsg.css';
import '../../css/f/fpdyebbsv.css';
import '../../css/k/kpulv0b_m.css';
import '../../css/i/is_f1mb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="odjw4abrt wm-k"/><path class="mtt4-nwsg wm-k"/><path class="fpdyebbsv wm-k"/><path class="kpulv0b_m wm-shine"/><path class="is_f1mb5f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:crayon"} {...others} />);
}

export default Component;
