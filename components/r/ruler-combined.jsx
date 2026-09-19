import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/orbjh-bde.css';
import '../../css/p/p2k07nq4l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="orbjh-bde"/><path class="p2k07nq4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ruler-combined"} {...others} />);
}

export default Component;
