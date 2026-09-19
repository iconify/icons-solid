import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/owljg8n8o.css';
import '../../css/f/f7xpncc0q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="owljg8n8o"/><path class="f7xpncc0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:camcorder"} {...others} />);
}

export default Component;
