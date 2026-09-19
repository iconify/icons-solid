import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbjwq7z1x.css';
import '../../css/i/i61tymsyr.css';
import '../../css/b/bzs2jobta.css';
import '../../css/v/vidyn3b5f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="tbjwq7z1x"/><path class="i61tymsyr"/><path class="bzs2jobta"/><path class="vidyn3b5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:copy-duo"} {...others} />);
}

export default Component;
