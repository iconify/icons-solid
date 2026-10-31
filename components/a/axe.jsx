import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jonq8kbnh.css';
import '../../css/u/u7pa-p18h.css';
import '../../css/m/mjecvc15l.css';
import '../../css/g/gfqmenbgk.css';
import '../../css/o/ol0dwcb1g.css';
import '../../css/v/vte0veb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jonq8kbnh"/><path class="u7pa-p18h"/><path class="mjecvc15l wm-k"/><path class="gfqmenbgk wm-a"/><path class="ol0dwcb1g"/><path class="vte0veb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:axe"} {...others} />);
}

export default Component;
