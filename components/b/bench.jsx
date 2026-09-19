import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lj_kddc-h.css';
import '../../css/r/rw9j7qbfc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="lj_kddc-h"/><path class="rw9j7qbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bench"} {...others} />);
}

export default Component;
