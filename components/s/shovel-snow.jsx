import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dzmci1bcl.css';
import '../../css/t/tlq4hhbad.css';
import '../../css/u/u4jf9uu6j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="dzmci1bcl"/><path class="tlq4hhbad"/><path class="u4jf9uu6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:shovel-snow"} {...others} />);
}

export default Component;
