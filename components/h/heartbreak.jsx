import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zdhvufbqc.css';
import '../../css/a/auso768dw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="zdhvufbqc"/><path class="auso768dw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heartbreak"} {...others} />);
}

export default Component;
