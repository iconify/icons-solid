import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbqz0xbia.css';
import '../../css/a/aqdcgn30f.css';
import '../../css/s/sikw3pb2u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lbqz0xbia"/><path class="aqdcgn30f"/><path clip-rule="evenodd" class="sikw3pb2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:hourglass-0"} {...others} />);
}

export default Component;
