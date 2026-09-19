import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o4z1g5snb.css';
import '../../css/n/nwlabrbjy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="o4z1g5snb"/><path class="nwlabrbjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:spade"} {...others} />);
}

export default Component;
