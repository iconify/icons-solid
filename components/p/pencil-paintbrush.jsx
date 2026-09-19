import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d8pjg7bod.css';
import '../../css/w/wvg4ugbho.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="d8pjg7bod"/><path class="wvg4ugbho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pencil-paintbrush"} {...others} />);
}

export default Component;
