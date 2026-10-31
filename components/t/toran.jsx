import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sffv9vbmj.css';
import '../../css/r/rij3u7teq.css';
import '../../css/m/mjk-60smy.css';
import '../../css/o/o0kpffbbe.css';
import '../../css/m/mta4s4b4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sffv9vbmj wm-shadow"/><path class="rij3u7teq wm-shadow"/><path class="mjk-60smy"/><path class="o0kpffbbe"/><path class="mta4s4b4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:toran"} {...others} />);
}

export default Component;
