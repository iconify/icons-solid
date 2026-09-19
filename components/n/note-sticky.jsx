import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/faeyjk65g.css';
import '../../css/q/qpup2js0g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="faeyjk65g"/><path class="qpup2js0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-sticky"} {...others} />);
}

export default Component;
