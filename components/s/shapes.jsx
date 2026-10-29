import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vegku6bjc.css';
import '../../css/b/bdetagb7g.css';
import '../../css/q/qdt8xhbyq.css';
import '../../css/g/gpxhnkb3r.css';
import '../../css/i/i21f3xb5j.css';
import '../../css/y/y43r2nbts.css';
import '../../css/p/pmkkwi_6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="vegku6bjc wm-shadow"/><path class="bdetagb7g"/><path class="qdt8xhbyq"/><path class="gpxhnkb3r"/><path class="i21f3xb5j"/><path class="wm-shine y43r2nbts"/><path class="pmkkwi_6w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:shapes"} {...others} />);
}

export default Component;
