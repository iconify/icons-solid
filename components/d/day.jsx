import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tsieswvel.css';
import '../../css/i/idw-iuuqj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="tsieswvel"/><path class="idw-iuuqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:day"} {...others} />);
}

export default Component;
