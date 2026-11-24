import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq_yc_azc.css';
import '../../css/r/rq0x_wbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cq_yc_azc"/><path class="rq0x_wbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:metronome-filled"} {...others} />);
}

export default Component;
