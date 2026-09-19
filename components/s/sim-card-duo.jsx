import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfyy8ibeu.css';
import '../../css/h/h2_n6-bvy.css';
import '../../css/s/sm2rlob0q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wfyy8ibeu"/><path class="h2_n6-bvy"/><path class="sm2rlob0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sim-card-duo"} {...others} />);
}

export default Component;
