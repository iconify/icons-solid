import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/un4f2vbbr.css';
import '../../css/m/m801sybhi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="un4f2vbbr"/><path class="m801sybhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:street-light"} {...others} />);
}

export default Component;
