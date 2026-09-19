import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yh1fggbau.css';
import '../../css/o/o_x_kbchi.css';
import '../../css/e/emxd30-sb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="yh1fggbau"/><path class="o_x_kbchi"/><path class="emxd30-sb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cloudy-mostly"} {...others} />);
}

export default Component;
