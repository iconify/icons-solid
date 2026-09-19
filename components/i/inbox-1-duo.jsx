import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_3yj8p9m.css';
import '../../css/h/hgo80xbyl.css';
import '../../css/b/b-fp7ubre.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="i_3yj8p9m"/><path class="hgo80xbyl"/><path class="b-fp7ubre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:inbox-1-duo"} {...others} />);
}

export default Component;
