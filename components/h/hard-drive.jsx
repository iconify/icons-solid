import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i-f9edsiu.css';
import '../../css/r/rjpznebse.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="i-f9edsiu"/><path class="rjpznebse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hard-drive"} {...others} />);
}

export default Component;
