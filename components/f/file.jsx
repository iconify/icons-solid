import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wwo8iebgu.css';
import '../../css/d/d58qn-eje.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="wwo8iebgu"/><path class="d58qn-eje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:file"} {...others} />);
}

export default Component;
