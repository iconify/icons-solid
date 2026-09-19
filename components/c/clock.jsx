import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mkrulybhz.css';
import '../../css/b/b9haxfb7r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="mkrulybhz"/><path class="b9haxfb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clock"} {...others} />);
}

export default Component;
