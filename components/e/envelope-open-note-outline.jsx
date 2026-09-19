import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn4_y8q_q.css';
import '../../css/b/bt-ahhqxu.css';
import '../../css/n/n61mitb0d.css';
import '../../css/y/y--rwpmhn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yn4_y8q_q"/><path clip-rule="evenodd" class="bt-ahhqxu"/><path class="n61mitb0d"/><path clip-rule="evenodd" class="y--rwpmhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:envelope-open-note-outline"} {...others} />);
}

export default Component;
