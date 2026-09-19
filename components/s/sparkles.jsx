import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/e6magr92w.css';
import '../../css/u/ux7a-acay.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="e6magr92w"/><path class="ux7a-acay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sparkles"} {...others} />);
}

export default Component;
