import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrqyh2bnp.css';
import '../../css/w/whu1r2b_l.css';
import '../../css/t/tzhmqyvju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rrqyh2bnp"/><path class="whu1r2b_l"/><path class="tzhmqyvju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:music-note-zzz"} {...others} />);
}

export default Component;
