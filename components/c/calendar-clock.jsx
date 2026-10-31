import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/ahu-acb5b.css';
import '../../css/n/n9-hux23b.css';
import '../../css/z/za2k2ubef.css';
import '../../css/i/i9cg2rj9b.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/q/q8sqotb6v.css';
import '../../css/h/hnda3fbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ahu-acb5b"/><path class="n9-hux23b wm-s"/><path class="wm-shine za2k2ubef"/><path class="i9cg2rj9b wm-k"/><path class="wm-a ykqnlnbbe"/><path class="q8sqotb6v wm-s"/><path class="hnda3fbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:calendar-clock"} {...others} />);
}

export default Component;
