import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/le8r1fb7t.css';
import '../../css/z/z8_yi4bim.css';
import '../../css/j/jv95subdn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="le8r1fb7t"/><path class="z8_yi4bim"/><path class="jv95subdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bars-offset"} {...others} />);
}

export default Component;
