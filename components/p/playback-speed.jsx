import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q9fh_bcid.css';
import '../../css/r/r1lwaui8b.css';
import '../../css/o/o_k6lcc5g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="q9fh_bcid"/><path class="r1lwaui8b"/><path class="o_k6lcc5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:playback-speed"} {...others} />);
}

export default Component;
