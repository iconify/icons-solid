import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hicvzob5q.css';
import '../../css/j/j_pb_dwin.css';
import '../../css/b/bbex37bec.css';
import '../../css/d/dnm7mqb6u.css';
import '../../css/m/mt0cadccr.css';
import '../../css/i/ii1hn--6r.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hicvzob5q wm-shadow"/><path class="j_pb_dwin"/><path class="bbex37bec"/><path class="dnm7mqb6u"/><path class="mt0cadccr wm-shine"/><path class="ii1hn--6r wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:milk"} {...others} />);
}

export default Component;
