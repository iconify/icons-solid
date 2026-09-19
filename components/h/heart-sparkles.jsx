import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mipampm5e.css';
import '../../css/b/bcsqw5n-n.css';
import '../../css/s/s5lscfbct.css';
import '../../css/s/s0gt0yp1q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="mipampm5e"/><path class="bcsqw5n-n"/><path class="s5lscfbct"/><path class="s0gt0yp1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-sparkles"} {...others} />);
}

export default Component;
