import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idjkkl0cj.css';
import '../../css/w/w5rhok_0r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="idjkkl0cj"/><path class="w5rhok_0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pharmacy-duo"} {...others} />);
}

export default Component;
