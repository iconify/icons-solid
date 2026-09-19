import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/prexb9bij.css';
import '../../css/i/it-_d4ayc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="prexb9bij"/><path class="it-_d4ayc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cog"} {...others} />);
}

export default Component;
