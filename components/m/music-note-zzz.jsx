import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vp73le0rq.css';
import '../../css/w/whu1r2b_l.css';
import '../../css/o/owothiwds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vp73le0rq"/><path class="whu1r2b_l"/><path class="owothiwds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:music-note-zzz"} {...others} />);
}

export default Component;
