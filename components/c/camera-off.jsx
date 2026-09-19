import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/r/rtily522h.css';
import '../../css/u/u80y2f7gv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="rtily522h"/><path class="u80y2f7gv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:camera-off"} {...others} />);
}

export default Component;
