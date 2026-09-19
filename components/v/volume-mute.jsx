import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iw6xa6bfm.css';
import '../../css/o/og_tsc9qs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="iw6xa6bfm"/><path class="og_tsc9qs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:volume-mute"} {...others} />);
}

export default Component;
