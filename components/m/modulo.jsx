import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x4q8rjbot.css';
import '../../css/l/llc6ycc6b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="x4q8rjbot"/><path class="llc6ycc6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:modulo"} {...others} />);
}

export default Component;
