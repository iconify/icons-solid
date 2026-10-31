import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lesz0xbvo.css';
import '../../css/z/za2k2ubef.css';
import '../../css/i/i9cg2rj9b.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/a/a_eltob-q.css';
import '../../css/h/hnda3fbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lesz0xbvo"/><path class="wm-shine za2k2ubef"/><path class="i9cg2rj9b wm-k"/><path class="wm-a ykqnlnbbe"/><path class="a_eltob-q wm-s"/><path class="hnda3fbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:calendar-search"} {...others} />);
}

export default Component;
