import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vc8g37bqq.css';
import '../../css/l/lok261uvc.css';
import '../../css/u/u_-f0dsdg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="vc8g37bqq"/><path class="lok261uvc"/><path class="u_-f0dsdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:road"} {...others} />);
}

export default Component;
