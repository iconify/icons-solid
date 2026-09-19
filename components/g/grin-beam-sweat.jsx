import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j9pnn06xj.css';
import '../../css/t/th-akwb-u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="j9pnn06xj"/><path class="th-akwb-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-beam-sweat"} {...others} />);
}

export default Component;
