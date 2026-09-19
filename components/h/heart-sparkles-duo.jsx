import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deeudtm6r.css';
import '../../css/v/vlgqclbcf.css';
import '../../css/q/q-z0w2bpg.css';
import '../../css/y/yg572ybnd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="deeudtm6r"/><path class="vlgqclbcf"/><path class="q-z0w2bpg"/><path class="yg572ybnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-sparkles-duo"} {...others} />);
}

export default Component;
